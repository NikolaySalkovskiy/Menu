import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { PrismaClient } from '@prisma/client';
import bodyParser from "body-parser";
import fileUpload, { UploadedFile } from "express-fileupload";
import path from "path";
var cors = require("cors");

const { getStorage, ref, uploadBytes } = require('firebase/storage');
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require('./config/firebase.config');

const keccak256 = require('keccak256');

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(fileUpload({
  createParentPath: true
}));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(cors())

const prisma = new PrismaClient()

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const admin_user = await prisma.users.findFirst();
  if (email === admin_user?.login && admin_user?.passwordHash.equals(Buffer.from(password))) {
    const tokenValue = keccak256((Math.random()).toString()).toString('hex');
    await prisma.users.update({
      where: {
        id: admin_user.id,
      },
      data: {
        token: Buffer.from(tokenValue),
      },
    })

    res.json({
      success: true,
      payload: {
        token: tokenValue,
        user: {
          email: admin_user.login,
          role: admin_user.role
        }
      },
    })
  } else {
    res.status(403).send("Incorrect login or password. Auth failed")
  }
})

app.get("/categories", async (req: Request, res: Response) => {
  const categories = await prisma.categories.findMany();
  res.json({
    success: true,
    payload: categories,
  })
})

app.get("/dishes", async (req: Request, res: Response) => {
  const dishes = await prisma.dish.findMany();
  res.json({
    success: true,
    payload: dishes,
  })
})

app.post("/dishes/create", async (req: Request, res: Response) => {
  const auth_token = req.headers.authorization as String;
  if (!auth_token) return res.status(403).json({ error: "No auth token provided" })
  const admin_user = await prisma.users.findFirst();
  if (!admin_user?.token.equals(Buffer.from(auth_token))) return res.status(403).json({ error: "Incorrect token provided" })
  
  if (!req.files) {
    return res.status(400).json({ error: "No file uploaded" })
  }
  const file = req.files.image as UploadedFile;

  if (!file) return res.json({ error: "Incorrect input name" });

  const { name, categorieId, price } = req.body;
  if(!name || !categorieId || !price) {
    return res.status(400).json({ error: "Not all fields inputed" })
  }

  let newDish = await prisma.dish.create({
    data: {name: name, price: Number(price), picUrl: "", categorieId: Number(categorieId) }
  })
  const picUrl = `https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/${newDish.id}.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e`

  newDish = await prisma.dish.update({
    where: {
      id: newDish.id,
    },
    data: {
      picUrl: picUrl,
    }
  })

  const storage = getStorage();
  const storageRef = ref(storage, `${newDish.id}.jpg`);

  const metadata = {
    contentType: file.mimetype,
  };

  const result = await uploadBytes(storageRef, file.data, metadata);

  res.json({
    success: true,
    payload: newDish,
  }) 
})

app.options('/dishes/:id', cors()) 

app.delete("/dishes/:id", async (req: Request, res: Response) => {
  const auth_token = req.headers.authorization as String;
  if (!auth_token) return res.status(403).json({ error: "No auth token provided" })
  const admin_user = await prisma.users.findFirst();
  if (!admin_user?.token.equals(Buffer.from(auth_token))) return res.status(403).json({ error: "Incorrect token provided" })

  const { id } = req.params;
  const result = await prisma.dish.delete({
    where: { id: Number(id)}
  })
  res.json({
    success: true,
    payload: result,
  })
})

app.use((req: Request, res: Response, next) => {
  res.status(404);
  return res.json({
    success: false,
    payload: null,
    message: `API SAYS: Endpoint not found for path: ${req.path}`,
  });
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

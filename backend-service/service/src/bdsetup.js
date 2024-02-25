const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function main() {
  const newUser = await prisma.users.create({
    data: {
      login: "admin",
      passwordHash: Buffer.from("admin"),
      role: "admin",
      token: Buffer.from("")
    }
  })

  await prisma.categories.createMany({
    data: [
      { name: "Breakfast" },
      { name: "Soups"},
      { name: "Hot dishes" },
      { name: "Cold starters"},
      { name: "Hot snacks" },
      { name: "Sauses"},
      { name: "Bruschetta" },
      { name: "Desserts" },
      { name: "Drinks" }
    ]
  })

  await prisma.dish.createMany({
    data: [
        {name: "Raspberry Cinnamon Rolls", price: 200, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/1.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 1},
        {name: "Zucchini Banana Bread Muffins", price: 350, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/2.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 1},
        {name: "Chilaquiles", price: 200, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/3.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 1},
        {name: "Bori Bori", price: 230, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/4.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 2},
        {name: "Borsch", price: 400, picUrl:"https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/5.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 2},
        {name: "Pangasius with Carrot", price: 210, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/6.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 3},
        {name: "Juicy baked Chicken with Quince and Apples", price: 540, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/7.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 3},
        {name: "Ceasar salad", price: 450, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/8.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 4},
        {name: "Greek salad", price: 400, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/9.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 4},
        {name: "Cheesy Bacon Jalapeno Poppers", price: 320, picUrl:"https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/10.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 5},
        {name: "Mini Ham and Cheese Quiches", price: 400, picUrl:"https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/11.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 5},
        {name: "Mole", price: 150, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/12.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 6},
        {name: "Marinaro", price: 130, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/13.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 6},
        {name: "Tomato Bruschetta", price: 240, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/14.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 7},
        {name: "Anchovy Bruschetta", price: 300, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/15.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 7},
        {name: "Napoleon", price: 450, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/16.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 8},
        {name: "Cheesecake", price: 330, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/17.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 8},
        {name: "Coca cola", price: 100, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/18.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 9},
        {name: "Sprite", price: 100, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/19.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 9},
        {name: "Fanta", price: 100, picUrl: "https://firebasestorage.googleapis.com/v0/b/menu-f6381.appspot.com/o/20.jpg?alt=media&token=b3eb1e1f-02be-4c08-90fa-a5735d6be74e", categorieId: 9}
    ]
  })
}
// категории: завтраки, супы, горчие блюда, холодные закуски, горячие закуски, соусы, брускетты, десерты, напитки
main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect())

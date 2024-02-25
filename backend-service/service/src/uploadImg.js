const { getStorage, ref ,uploadBytesResumable } = require('firebase/storage');
const { signInWithEmailAndPassword, createUserWithEmailAndPassword } = require("firebase/auth");
const { auth } = require('./config/firebase.config');

async function uploadImage(file, name) {
    const storageFB = getStorage();

    await signInWithEmailAndPassword(auth, '123@gmail.com', '123456')

    const fileName = `images/${name}`
    const storageRef = ref(storageFB, fileName)
    const metadata = {
        contentType: file.type,
    }
    await uploadBytesResumable(storageRef, file.buffer, metadata);
    console.log("msg uploaded")
    return fileName
}

module.exports = {
    uploadImage
};

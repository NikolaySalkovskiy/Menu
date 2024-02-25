// Import the functions you need from the SDKs you need
const { initializeApp } = require("firebase/app");
const { getAuth } = require("firebase/auth");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSz72xBWecSZwMNqOUZ0Gy5T2C-iJkbsE",
  authDomain: "menu-f6381.firebaseapp.com",
  projectId: "menu-f6381",
  storageBucket: "menu-f6381.appspot.com",
  messagingSenderId: "689203517857",
  appId: "1:689203517857:web:7486500d4fe15b2d7313e0",
  measurementId: "G-5VM3FMRQ2T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

module.exports = { 
    auth,
    firebaseConfig
}
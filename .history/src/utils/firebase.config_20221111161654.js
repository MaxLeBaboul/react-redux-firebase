// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// Your web app's Firebase configuration
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "react-redux-app-2c819.firebaseapp.com",
  projectId: "react-redux-app-2c819",
  storageBucket: "react-redux-app-2c819.appspot.com",
  messagingSenderId: "666644555655",
  appId: "1:666644555655:web:147f77a39c5a598f761522",
});

export const auth = app.auth();
export default app;

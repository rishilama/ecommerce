// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
  authDomain: "products-list-50418.firebaseapp.com",
  databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
  projectId: "products-list-50418",
  storageBucket: "products-list-50418.appspot.com",
  messagingSenderId: "327555328633",
  appId: "1:327555328633:web:980a1b3bd50e4238f142a8",
  measurementId: "G-RKN740J5DD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireStore = getFirestore(app);

export { app, fireStore };
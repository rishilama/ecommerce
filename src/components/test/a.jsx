// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0a1HfRzT_IzmO0-qnzbybtgFT3aNVX7o",
  authDomain: "products-list-50418.firebaseapp.com",
  databaseURL: "https://products-list-50418-default-rtdb.firebaseio.com",
  projectId: "products-list-50418",
  storageBucket: "products-list-50418.appspot.com",
  messagingSenderId: "327555328633",
  appId: "1:327555328633:web:02fbbdf1948f7bb7f142a8",
  measurementId: "G-SLF18NVH5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
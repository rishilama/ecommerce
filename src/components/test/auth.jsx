// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBf3iw58MFYN365IEModwdbtZCLAhmgBA",
  authDomain: "shopperssquare-sakura.firebaseapp.com",
  databaseURL: "https://shopperssquare-sakura-default-rtdb.firebaseio.com/",
  projectId: "shopperssquare-sakura",
  storageBucket: "shopperssquare-sakura.appspot.com",
  messagingSenderId: "231047880262",
  appId: "1:231047880262:web:20f72ca54fb8f2f2847447",
  measurementId: "G-ETDL9332ZR"
};


// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseapp);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6L3EHwuOaEQXcQmOX6PWqHcH4actKOBM",
  authDomain: "vite-contact-69fdb.firebaseapp.com",
  projectId: "vite-contact-69fdb",
  storageBucket: "vite-contact-69fdb.appspot.com",
  messagingSenderId: "185583514097",
  appId: "1:185583514097:web:dbb6d7b43b74df9a175450"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
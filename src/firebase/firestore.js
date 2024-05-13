// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL4wHJx-G8TA_HTw9lAm82lyLD30cpB-U",
  authDomain: "article-management-syste-574d1.firebaseapp.com",
  projectId: "article-management-syste-574d1",
  storageBucket: "article-management-syste-574d1.appspot.com",
  messagingSenderId: "345724459037",
  appId: "1:345724459037:web:2fa750de060d83aef24ef4",
  measurementId: "G-K0WTQDRD0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
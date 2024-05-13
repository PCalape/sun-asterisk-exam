import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

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
// const docRef = db.collection('articles');
// await docRef.set({
//   title: 'Hello',
//   content: 'World',
// })

// await docRef.get().then((doc) => {
//   if (doc.exists()) {
//     console.log("Document data:", doc.data());
//   } else {
//     // doc.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }).catch((error) => {
//   console.log("Error getting document:", error);
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

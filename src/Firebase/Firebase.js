



// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAFrb42r7anurp5AGEqlvI0SEwnKLeo-pE",
  authDomain: "dashboard-427c3.firebaseapp.com",
  projectId: "dashboard-427c3",
  storageBucket: "dashboard-427c3.firebasestorage.app",
  messagingSenderId: "1082727347432",
  appId: "1:1082727347432:web:6cc80c2c753699efa8455d",
};

// Initialize Firebase;
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

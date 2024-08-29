// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD0DL9oySEiaubIqZ9mEkJgQTa0PmEQCT4",
  authDomain: "billboard-9c1fb.firebaseapp.com",
  projectId: "billboard-9c1fb",
  storageBucket: "billboard-9c1fb.appspot.com",
  messagingSenderId: "446888863782",
  appId: "1:446888863782:web:20013cc9613f0bacd69ee7",
  measurementId: "G-JYHRRDPW00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
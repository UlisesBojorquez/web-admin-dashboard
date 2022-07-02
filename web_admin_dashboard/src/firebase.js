// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "web-admin-c2a8a.firebaseapp.com",
  projectId: "web-admin-c2a8a",
  storageBucket: "web-admin-c2a8a.appspot.com",
  messagingSenderId: "720469410291",
  appId: "1:720469410291:web:5e3e6d35932848cc375286",
  measurementId: "G-RSB675V7LQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
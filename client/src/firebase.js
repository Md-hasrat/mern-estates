// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-12.firebaseapp.com",
  projectId: "mern-estate-12",
  storageBucket: "mern-estate-12.appspot.com",
  messagingSenderId: "111310890817",
  appId: "1:111310890817:web:0b55e975fd623e0b4ca3c0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
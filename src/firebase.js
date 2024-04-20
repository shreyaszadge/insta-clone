// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "instaclone-6f6fb.firebaseapp.com",
  projectId: "instaclone-6f6fb",
  storageBucket: "instaclone-6f6fb.appspot.com",
  messagingSenderId: "1061377425548",
  appId: "1:1061377425548:web:eaa07a1826938f6db77ba9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKZmdCIWZLxXXbIdtMm8hcuAbsH4evz08",
  authDomain: "cs-ia-language-lingai-tutor.firebaseapp.com",
  projectId: "cs-ia-language-lingai-tutor",
  storageBucket: "cs-ia-language-lingai-tutor.appspot.com",
  messagingSenderId: "505494260864",
  appId: "1:505494260864:web:dcd15c811d55964fccea65",
  measurementId: "G-ND980P4JBP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export default app;

export const auth = getAuth(app);
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAprGn6B79Igzwx1pWojNANLNgf3sWV0BE",
  authDomain: "reactn8.firebaseapp.com",
  projectId: "reactn8",
  storageBucket: "reactn8.appspot.com",
  messagingSenderId: "369762538089",
  appId: "1:369762538089:web:38f2174aecd19166a148f8",
  measurementId: "G-NT621NGQXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
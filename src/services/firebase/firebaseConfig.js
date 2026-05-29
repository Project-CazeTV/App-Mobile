import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLa1c5WKTEaDH7qID83GVrc8v3Q5ScAs8",
  authDomain: "cazetv-48e22.firebaseapp.com",
  projectId: "cazetv-48e22",
  storageBucket: "cazetv-48e22.firebasestorage.app",
  messagingSenderId: "117289277058",
  appId: "1:117289277058:web:6ac72dd5dbb43639e7469b",
  measurementId: "G-TGKX7WHFK5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account consent'
});
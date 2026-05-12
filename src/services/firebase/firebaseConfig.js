import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbzDS7X6skGTP_hp6HlnUy1RIURzduQCY",
  authDomain: "cazetv-2386d.firebaseapp.com",
  projectId: "cazetv-2386d",
  storageBucket: "cazetv-2386d.firebasestorage.app",
  messagingSenderId: "820531193934",
  appId: "1:820531193934:web:221aa898aaa84eea693b1f"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAAPPwTXsS93SzHZMqI-i8UZoXy4jYpmas",
  authDomain: "auth-a0246.firebaseapp.com",
  projectId: "auth-a0246",
  storageBucket: "auth-a0246.firebasestorage.app",
  messagingSenderId: "789709413672",
  appId: "1:789709413672:web:82e716b97c9672bb35441d"
};
//project-789709413672
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {
  auth,
  provider,
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
};
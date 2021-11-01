// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBP88yBa4_G4J991Vyjou06ndNXoi2tL6Y",
  authDomain: "netflix-clone-dc0b1.firebaseapp.com",
  projectId: "netflix-clone-dc0b1",
  storageBucket: "netflix-clone-dc0b1.appspot.com",
  messagingSenderId: "733691569728",
  appId: "1:733691569728:web:62d88d08495129f05361a5",
  measurementId: "G-LYLQSQ35TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

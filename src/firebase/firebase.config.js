// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyow2sdjEXIDfvN-yJ6X3tccjdz-W4SVw",
  authDomain: "greennest-638ce.firebaseapp.com",
  projectId: "greennest-638ce",
  storageBucket: "greennest-638ce.firebasestorage.app",
  messagingSenderId: "322641135687",
  appId: "1:322641135687:web:8253e0c02f98ea33a18962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
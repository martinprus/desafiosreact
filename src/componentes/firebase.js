import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXemzGVctXd25GchPikqZc2ZPDYR9IfCQ",
  authDomain: "proyecto-coderhouse-f0014.firebaseapp.com",
  projectId: "proyecto-coderhouse-f0014",
  storageBucket: "proyecto-coderhouse-f0014.appspot.com",
  messagingSenderId: "325084369336",
  appId: "1:325084369336:web:678efbd065f2a9959b7f4d",
  measurementId: "G-G4FGY3CRH0",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

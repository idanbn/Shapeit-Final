// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDHOdGagmtXrjKuF5xfeqpLnkRN-ZlvL_E",
    authDomain: "sahpeit-db.firebaseapp.com",
    projectId: "sahpeit-db",
    storageBucket: "sahpeit-db.appspot.com",
    messagingSenderId: "884189070364",
    appId: "1:884189070364:web:4dad15310430d0f6518bd9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
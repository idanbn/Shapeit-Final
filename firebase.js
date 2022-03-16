// Import the functions you need from the SDKs you need
import { firebase,initializeApp } from "firebase/firebase";
import '@firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQ6sUA8iq5E3A2hBNpk3dxilN5RiOGe68",
  authDomain: "fir-auth-701c6.firebaseapp.com",
  projectId: "fir-auth-701c6",
  storageBucket: "fir-auth-701c6.appspot.com",
  messagingSenderId: "976163731798",
  appId: "1:976163731798:web:b3ebcf19c4eed4804b3ef7"
};

// Initialize Firebase

let appo;


appo = initializeApp(firebaseConfig)






const db = appo.firestore();
const auth=appo.auth();
export { db, auth };
// Import the functions you need from the SDKs you need

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
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


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
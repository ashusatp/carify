// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBtVQl7SVrxsJUkpn1lQXMWV-5AbDTLdro",
  authDomain: "cartify-96da7.firebaseapp.com",
  projectId: "cartify-96da7",
  storageBucket: "cartify-96da7.appspot.com",
  messagingSenderId: "1000822768902",
  appId: "1:1000822768902:web:e3507d96e06e6c48954a87",
  measurementId: "G-C56XBTMF4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth, signOut};
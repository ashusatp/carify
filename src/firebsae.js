// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,signOut} from 'firebase/auth'
const apiKey = process.env.REACT_APP_AUTH_KEY;
const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
const appId= process.env.REACT_APP_AUTH_CLIENT_ID;
const firebaseConfig = {
  apiKey,
  authDomain,
  projectId: "cartify-96da7",
  storageBucket: "cartify-96da7.appspot.com",
  messagingSenderId: "1000822768902",
  appId,
  measurementId: "G-C56XBTMF4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth, signOut};
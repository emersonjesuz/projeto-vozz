// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJbFGpHBYU3FAAmrdDoUTdkCSyjk4cnTI",
  authDomain: "vozz-6399f.firebaseapp.com",
  projectId: "vozz-6399f",
  storageBucket: "vozz-6399f.appspot.com",
  messagingSenderId: "1036785041646",
  appId: "1:1036785041646:web:650035d9b29b2f7d0973ff",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };

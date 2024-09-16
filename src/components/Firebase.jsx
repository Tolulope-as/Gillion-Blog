// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth";
import {getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjA_n0-8eOHBveez7-P2leF9pWoXevWV8",
  authDomain: "useraccount-auth.firebaseapp.com",
  projectId: "useraccount-auth",
  storageBucket: "useraccount-auth.appspot.com",
  messagingSenderId: "233801352526",
  appId: "1:233801352526:web:e00389ec84a15427964a1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db =getFirestore(app);
export default app;

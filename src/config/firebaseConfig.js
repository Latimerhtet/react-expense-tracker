// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPJ4lQI8K5TpuBDv85Lo0X1xq9MUVoGt4",
  authDomain: "my-expense-tracker-dc1c2.firebaseapp.com",
  projectId: "my-expense-tracker-dc1c2",
  storageBucket: "my-expense-tracker-dc1c2.appspot.com",
  messagingSenderId: "668787426057",
  appId: "1:668787426057:web:9630a9c8856283b3b349d8",
  measurementId: "G-N5K8QECGG6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy

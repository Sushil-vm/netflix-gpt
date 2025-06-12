// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAL5wDVp4BjTH42n3MQJCesE7fVTP9mhzs",
  authDomain: "netflixgpt-fd7c1.firebaseapp.com",
  projectId: "netflixgpt-fd7c1",
  storageBucket: "netflixgpt-fd7c1.firebasestorage.app",
  messagingSenderId: "887831967149",
  appId: "1:887831967149:web:abff996bd0fe17675e5d24",
  measurementId: "G-G9TDNHH8Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
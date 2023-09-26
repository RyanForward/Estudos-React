import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDyoyQfq3GA3JINzDgNF9iCQ_YdD5jwJ2E",
  authDomain: "curso-firebase-9fad2.firebaseapp.com",
  projectId: "curso-firebase-9fad2",
  storageBucket: "curso-firebase-9fad2.appspot.com",
  messagingSenderId: "584689867299",
  appId: "1:584689867299:web:771dbcb391b58db946af96",
  measurementId: "G-767ZJV1EEW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {db, auth}

// Import the functions you need from the SDKs you need
import { initializeApp, getApps , getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUyBjpyCYCFg-iGcNtZbJIoi8zfmXkG4w",
  authDomain: "bear-docs.firebaseapp.com",
  projectId: "bear-docs",
  storageBucket: "bear-docs.appspot.com",
  messagingSenderId: "29331808424",
  appId: "1:29331808424:web:2b83de836e159a74fda29d"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore()
const storage = getStorage()

export {app , db , storage};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAKPQj5DH9ke2M1gcTN4RETL5S_g3ws22w",
  authDomain: "wangsit-79c21.firebaseapp.com",
  projectId: "wangsit-79c21",
  storageBucket: "wangsit-79c21.appspot.com",
  messagingSenderId: "226368166375",
  appId: "1:226368166375:web:41553cffe504c47c17c542",
  measurementId: "G-EHPBNLELDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, analytics,storage};
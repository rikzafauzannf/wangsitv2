// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBegauEt2ayAbcetoMxvegmtg1ykF5Z0Bk",
  authDomain: "datawangsit-e30c1.firebaseapp.com",
  projectId: "datawangsit-e30c1",
  storageBucket: "datawangsit-e30c1.appspot.com",
  messagingSenderId: "46237304764",
  appId: "1:46237304764:web:6a6dab875e4cbff85d8db9",
  measurementId: "G-Q4WS19L2X5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, analytics,storage};
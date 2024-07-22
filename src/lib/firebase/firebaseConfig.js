// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBqeM9NMeyvY2bAerBGnJpQVzdkaQrrWk4",
  authDomain: "wangsit-43241.firebaseapp.com",
  projectId: "wangsit-43241",
  storageBucket: "wangsit-43241.appspot.com",
  messagingSenderId: "705907455804",
  appId: "1:705907455804:web:a5df1ccc6de480cf499039",
  measurementId: "G-LPK09DFT53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
const storage = getStorage(app);
const db = getFirestore(app);

export { db, analytics,storage};
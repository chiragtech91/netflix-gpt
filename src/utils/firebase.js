// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4Pah9Oo8x4VXi-OQR68nDjlyhaUPAAnI",
  authDomain: "netflix-3b697.firebaseapp.com",
  projectId: "netflix-3b697",
  storageBucket: "netflix-3b697.appspot.com",
  messagingSenderId: "927109076174",
  appId: "1:927109076174:web:8e68f92235746688af2c9f",
  measurementId: "G-RHJNVYECST"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();

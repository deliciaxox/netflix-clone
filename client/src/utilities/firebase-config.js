// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPvjHcr2sxULqT-r43MIbKx94E0wLAU4E",
  authDomain: "netflix-clone-14c30.firebaseapp.com",
  projectId: "netflix-clone-14c30",
  storageBucket: "netflix-clone-14c30.appspot.com",
  messagingSenderId: "889107352097",
  appId: "1:889107352097:web:c608763a4e7af312287160",
  measurementId: "G-MWWZ7T2PYG",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);

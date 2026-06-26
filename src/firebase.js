import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Replace this with your actual Firebase configuration
// 1. Go to console.firebase.google.com
// 2. Add a new Web App to your project
// 3. Paste the configuration here
const firebaseConfig = {
  apiKey: "AIzaSyAaQnWh8txzMLB0SeZ3xrjEZXbbCSApxfY",
  authDomain: "ecovaluate-64841.firebaseapp.com",
  projectId: "ecovaluate-64841",
  storageBucket: "ecovaluate-64841.firebasestorage.app",
  messagingSenderId: "211773290381",
  appId: "1:211773290381:web:46390a9270453a026f6fc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

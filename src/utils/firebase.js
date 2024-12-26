// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY4MJiqESINRyeCXPVrKxvnoRyKeI5UgI",
  authDomain: "netflix-gpt-47dd8.firebaseapp.com",
  projectId: "netflix-gpt-47dd8",
  storageBucket: "netflix-gpt-47dd8.firebasestorage.app",
  messagingSenderId: "938498065981",
  appId: "1:938498065981:web:0690a6225b8d237be9cc54",
  measurementId: "G-4ZZHQ973KV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

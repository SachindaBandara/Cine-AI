// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCA_FQ1ED8qFXe9srK71zFWh9UqzxKIYoI",
  authDomain: "netflixgpt-bf5c0.firebaseapp.com",
  projectId: "netflixgpt-bf5c0",
  storageBucket: "netflixgpt-bf5c0.firebasestorage.app",
  messagingSenderId: "118529278793",
  appId: "1:118529278793:web:b61fd6aa77284357721098",
  measurementId: "G-TT3DXFXMFR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
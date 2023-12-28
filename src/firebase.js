// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyAOPX-k2D8jiBKRlwAmal5rt1VpOroH3Ls",
  authDomain: "portfolioallin-2ce4b.firebaseapp.com",
  projectId: "portfolioallin-2ce4b",
  storageBucket: "portfolioallin-2ce4b.appspot.com",
  messagingSenderId: "532515022801",
  appId: "1:532515022801:web:a792f17aabb73a166da2f0",
  measurementId: "G-3ZJZKP890E"
};

// Initialize Firebase
const app = initializeApp(Config);
const analytics = getAnalytics(app);

// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCsx7mCjpBA0lup2-L9Dz2aVph9iuFTw_s",
    authDomain: "nucleusfusion-e3a6f.firebaseapp.com",
    projectId: "nucleusfusion-e3a6f",
    storageBucket: "nucleusfusion-e3a6f.appspot.com",
    messagingSenderId: "1072587854792",
    appId: "1:1072587854792:web:e4e8a3c6921cbc228e26fd",
    measurementId: "G-GWV49V75P0"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, GoogleAuthProvider, signInWithPopup, signOut };

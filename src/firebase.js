// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCsx7mCjpBA0lup2-L9Dz2aVph9iuFTw_s",
    authDomain: "nucleusfusion-e3a6f.firebaseapp.com",
    projectId: "nucleusfusion-e3a6f",
    storageBucket: "nucleusfusion-e3a6f.appspot.com",
    messagingSenderId: "1072587854792",
    appId: "1:1072587854792:web:e4e8a3c6921cbc228e26fd",
    measurementId: "G-GWV49V75P0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Set up reCAPTCHA verifier for phone number authentication
const setupRecaptcha = (containerId) => {
    return new RecaptchaVerifier(containerId, {
        'size': 'invisible',
        'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            console.log('reCAPTCHA solved');
        }
    }, auth);
};

// Function to sign in with phone number
const signInWithPhone = (phoneNumber, recaptchaVerifier) => {
    return signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
};

// Export the necessary Firebase Authentication functions and objects
export { auth, GoogleAuthProvider, signInWithPopup, signOut, setupRecaptcha, signInWithPhone };

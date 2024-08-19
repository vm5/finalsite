/* global grecaptcha */

import { initializeApp } from 'firebase/app';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';

// Firebase configuration object
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
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

// Set up reCAPTCHA
const setupRecaptcha = (containerId) => {
  window.recaptchaVerifier = new RecaptchaVerifier(containerId, {}, auth);
  window.recaptchaVerifier.render().then((widgetId) => {
    window.recaptchaWidgetId = widgetId;
  }).catch((error) => {
    console.error('Error rendering reCAPTCHA:', error);
  });
};

// Handle phone sign-in
const handlePhoneSignIn = async (phoneNumber) => {
  setupRecaptcha('recaptcha-container');

  const appVerifier = window.recaptchaVerifier;

  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
    window.confirmationResult = confirmationResult;
    console.log('SMS sent. Verification ID:', confirmationResult.verificationId);
    return confirmationResult;
  } catch (error) {
    console.error('Error during sign-in:', error);
    // Reset reCAPTCHA widget if there's an error
    if (window.recaptchaWidgetId && typeof grecaptcha !== 'undefined') {
      grecaptcha.reset(window.recaptchaWidgetId);
    }
    throw error;
  }
};

// Verify the code received via SMS
const verifyCode = async (code) => {
  const confirmationResult = window.confirmationResult;

  try {
    const result = await confirmationResult.confirm(code);
    const user = result.user;
    console.log('User signed in successfully:', user);
    return user;
  } catch (error) {
    console.error('Error verifying code:', error);
    throw error;
  }
};

export { auth, setupRecaptcha, handlePhoneSignIn, verifyCode };

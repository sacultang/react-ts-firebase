// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAL5r5QKb7SwI5teVFZwrmEPS3WnTALwZ0',
  authDomain: 'react-firebase-login-b8633.firebaseapp.com',
  projectId: 'react-firebase-login-b8633',
  storageBucket: 'react-firebase-login-b8633.appspot.com',
  messagingSenderId: '55503279629',
  appId: '1:55503279629:web:cea696d80eb1e229c86744',
  measurementId: 'G-XJNNMP1PJF',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

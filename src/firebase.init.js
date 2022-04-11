// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7WFfJxjmvAiJ_otsaEZs-u7--kFAlFuo",
  authDomain: "ema-john-with-firebase-7b441.firebaseapp.com",
  projectId: "ema-john-with-firebase-7b441",
  storageBucket: "ema-john-with-firebase-7b441.appspot.com",
  messagingSenderId: "258325833072",
  appId: "1:258325833072:web:0369cc537d50c18c631bb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
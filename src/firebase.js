import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1slL1N-t22AN8_xj1KWQmfaPtYVluCDo",
  authDomain: "api-autenticacion-d9613.firebaseapp.com",
  projectId: "api-autenticacion-d9613",
  storageBucket: "api-autenticacion-d9613.appspot.com",
  messagingSenderId: "602446230728",
  appId: "1:602446230728:web:8a4d6eb98b4ae64db8a1fd",
  measurementId: "G-GFWDLZS25N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

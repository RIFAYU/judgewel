import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA9O7gayFvBvN9fOMBmeYmtJaGTdT67X_c",
  authDomain: "judgewel.firebaseapp.com",
  projectId: "judgewel",
  storageBucket: "judgewel.appspot.com",
  messagingSenderId: "885693985680",
  appId: "1:885693985680:web:b993250c9d319e9f5c3915",
  measurementId: "G-3KQZR674XX"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "eshop-vaii.firebaseapp.com",
  projectId: "eshop-vaii",
  storageBucket: "eshop-vaii.appspot.com",
  messagingSenderId: "996427329353",
  appId: "1:996427329353:web:b0614b18754875b8c9b498",
  measurementId: "G-ZXFEP2S3PW",
};

const app = initializeApp(firebaseConfig);

export default app;

import Navbar from "./Navbar.jsx";
import Text from "./Text.jsx";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
// Required for side-effects
import "firebase/firestore";
require("dotenv").config();
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.GOOGLE_API_KEY,
  authDomain: "eshop-vaii.firebaseapp.com",
  projectId: "eshop-vaii",
  storageBucket: "eshop-vaii.appspot.com",
  messagingSenderId: "996427329353",
  appId: "1:996427329353:web:b0614b18754875b8c9b498",
  measurementId: "G-ZXFEP2S3PW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

function App() {
  return (
    <>
      <Navbar />
      <Text />
    </>
  );
}

export default App;

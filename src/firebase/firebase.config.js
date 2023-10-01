// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDauE-j_Zl_E-TQBizK6LeHw1M9Cc9s_tw",
  authDomain: "login-register-1e937.firebaseapp.com",
  projectId: "login-register-1e937",
  storageBucket: "login-register-1e937.appspot.com",
  messagingSenderId: "1042015705191",
  appId: "1:1042015705191:web:824898917c095b4bac5cc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;

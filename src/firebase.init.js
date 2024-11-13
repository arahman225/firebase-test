// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw3nY1yb6Yyk_-bcWRPA_nt5Srhyi_PFA",
  authDomain: "fir-mohamilon.firebaseapp.com",
  projectId: "fir-mohamilon",
  storageBucket: "fir-mohamilon.firebasestorage.app",
  messagingSenderId: "962783235059",
  appId: "1:962783235059:web:713ae758ff0ad45908e086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
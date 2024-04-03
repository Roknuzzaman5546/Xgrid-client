// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAncMHMN9tIAnFNOxMy_HeKSGaDn9W0ETs",
  authDomain: "xgrid-1a50d.firebaseapp.com",
  projectId: "xgrid-1a50d",
  storageBucket: "xgrid-1a50d.appspot.com",
  messagingSenderId: "526294812963",
  appId: "1:526294812963:web:1622bda2eb6cc012caa496"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
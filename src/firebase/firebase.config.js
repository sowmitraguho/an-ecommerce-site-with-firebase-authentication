// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8Ei7CpxAG_z4l-a2vmXyqlnMWfjBOlWk",
  authDomain: "an-ecommerce-site.firebaseapp.com",
  projectId: "an-ecommerce-site",
  storageBucket: "an-ecommerce-site.appspot.com",
  messagingSenderId: "369245438094",
  appId: "1:369245438094:web:3a1e948702c92d3258c9df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
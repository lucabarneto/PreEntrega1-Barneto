import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpyKWu4K5obR9J1V_9vCa8P8y4rKA-rsM",
  authDomain: "fir-react-coder-40e5b.firebaseapp.com",
  projectId: "fir-react-coder-40e5b",
  storageBucket: "fir-react-coder-40e5b.appspot.com",
  messagingSenderId: "928992873446",
  appId: "1:928992873446:web:22a1843e396658f5a46427",
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

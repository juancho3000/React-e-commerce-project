import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn0K81BIsdZ1zCVcKmLyHb0axBi8zGqd4",
  authDomain: "react-comision-608015.firebaseapp.com",
  projectId: "react-comision-608015",
  storageBucket: "react-comision-608015.appspot.com",
  messagingSenderId: "436757886522",
  appId: "1:436757886522:web:b91c7dda0e52c6f7aba703"
};

// Initialize Firebase
// eslint-disable-next-line
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

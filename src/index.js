import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnbWhOkOAcNSAhy_1hvDBQGmkATIV-E4A",
  authDomain: "ipod-e4926.firebaseapp.com",
  projectId: "ipod-e4926",
  storageBucket: "ipod-e4926.appspot.com",
  messagingSenderId: "1015279088931",
  appId: "1:1015279088931:web:5ac479ca79b70a9b108896"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

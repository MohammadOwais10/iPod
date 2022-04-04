import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmv6g7bO3e2Jjn9C_phGBuLICeQi_R3DM",
  authDomain: "ipod-11b25.firebaseapp.com",
  projectId: "ipod-11b25",
  storageBucket: "ipod-11b25.appspot.com",
  messagingSenderId: "671111573331",
  appId: "1:671111573331:web:c90609e08ce3354c7ebba6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

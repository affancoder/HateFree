// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithEmailAndPassword ,
} from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";




// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBb8kqlOWDJJde0XhEyYoCIWLAOi0ycQgM",
  authDomain: "nohate-auth.firebaseapp.com",
  projectId: "nohate-auth",
  storageBucket: "nohate-auth.firebasestorage.app",
  messagingSenderId: "615309556364",
  appId: "1:615309556364:web:52bfe357b27c76ddf259a9",
  measurementId: "G-178NGYP042",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);  // You need to get the auth instance properly here

//inputs

const submit = document.getElementById("submit");
submit.addEventListener("click", function (event) {
  event.preventDefault();
  
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  
  signInWithEmailAndPassword(auth,email, password)
  .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user)
      // alert("Signin successfully...");
      window.location.href = "/index.html";
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // console.log(error)
      alert(errorMessage);
      // ..
    });
});

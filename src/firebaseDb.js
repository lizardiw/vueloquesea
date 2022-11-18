 // Import the functions you need from the SDKs you need
/* import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";



 //import firebase from "firebase/app";
 //import 'firebase/firestore'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBKes9k8JFXYtlQ2_xhNkkommTnIxgifaI",
   authDomain: "bdliza0408.firebaseapp.com",
   databaseURL: "https://bdliza0408-default-rtdb.firebaseio.com",
   projectId: "bdliza0408",
   storageBucket: "bdliza0408.appspot.com",
   messagingSenderId: "1012204050746",
   appId: "1:1012204050746:web:521e2fb19bb25bb2a2d803",
   measurementId: "G-GSL2BYQMKC"
 };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

*/

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBKes9k8JFXYtlQ2_xhNkkommTnIxgifaI",
  authDomain: "bdliza0408.firebaseapp.com",
  databaseURL: "https://bdliza0408-default-rtdb.firebaseio.com",
  projectId: "bdliza0408",
  storageBucket: "bdliza0408.appspot.com",
  messagingSenderId: "1012204050746",
  appId: "1:1012204050746:web:521e2fb19bb25bb2a2d803",
  measurementId: "G-GSL2BYQMKC"
  };








firebase.initializeApp(firebaseConfig);
var storage = firebase.storage();
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth, storage };
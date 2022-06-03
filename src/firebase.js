import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyADuLHAsn5eYiLGHNm-17Z2sLhV03XVkNg",
    authDomain: "ecommerce-81161.firebaseapp.com",
    projectId: "ecommerce-81161",
    storageBucket: "ecommerce-81161.appspot.com",
    messagingSenderId: "595355744824",
    appId: "1:595355744824:web:1376f282f1951d8ade84cd",
    measurementId: "G-Q7Y82XTELL"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default {db, auth};
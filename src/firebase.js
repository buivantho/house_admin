import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCSRz9lrw6UhwdfkZLxDbgLijEYPFKFW7c",
    authDomain: "housecleaning-48afb.firebaseapp.com",
    databaseURL: "https://housecleaning-48afb.firebaseio.com",
    projectId: "housecleaning-48afb",
    storageBucket: "housecleaning-48afb.appspot.com",
    messagingSenderId: "896399952076",
    appId: "1:896399952076:web:a37e46afa0223098a89a69",
    measurementId: "G-WY1HQ1G0GK"
  };
  firebase.initializeApp(firebaseConfig);
  const database = firebase.firestore();
export default database;

 
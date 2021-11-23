import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyB3c0WdjcXIUEMBx-PANSeQ_K17hQVHwf0",
    authDomain: "app-firebase-d0df0.firebaseapp.com",
    projectId: "app-firebase-d0df0",
    storageBucket: "app-firebase-d0df0.appspot.com",
    messagingSenderId: "683935854765",
    appId: "1:683935854765:web:f75b4f4dca269e06a99624",
    measurementId: "G-JLCW61JZEZ"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig); // inicializacion del firebase
  //firebase.analytics();
  const auth = fire.auth(); // dentro de auth todo el objeto o todo el servicio de firebase autentificacion
  export {auth}


  
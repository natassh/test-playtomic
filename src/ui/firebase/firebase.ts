import firebase from "firebase/app"; 
import "firebase/auth"; 
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAIJCNiLFFcSBSJjN0KtabxocQ4c7Qy4pA",
    authDomain: "test-playtomic-e8907.firebaseapp.com",
    projectId: "test-playtomic-e8907",
    storageBucket: "test-playtomic-e8907.appspot.com",
    messagingSenderId: "460421782890",
    appId: "1:460421782890:web:a22a7acd984a8dafa4d913"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export { firebase };
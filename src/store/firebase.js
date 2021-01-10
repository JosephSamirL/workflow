import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"



const firebaseConfig = {
  apiKey: "AIzaSyDEWQ3WMqNm4y7b0AJKeEZ-sr-ge1Ea6fs",
  authDomain: "study-c6a53.firebaseapp.com",
  projectId: "study-c6a53",
  storageBucket: "study-c6a53.appspot.com",
  messagingSenderId: "520230371258",
  appId: "1:520230371258:web:91b069c3a0e22d5fc22783"
};
  firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider();  
export const authh = firebase.auth()
export const database = firebase.database()
  
  
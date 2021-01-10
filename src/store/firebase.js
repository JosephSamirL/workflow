import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database"



const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "domain",
  projectId: "study-c6a53",
  storageBucket: "Storage",
  messagingSenderId: "ID",
  appId: "ID"
};
  firebase.initializeApp(firebaseConfig)
export const provider = new firebase.auth.GoogleAuthProvider();  
export const authh = firebase.auth()
export const database = firebase.database()
  
  

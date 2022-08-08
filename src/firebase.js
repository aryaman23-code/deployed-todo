import firebase from "firebase";

const firebaseConfig ={
    apiKey: "AIzaSyBkeEKVHbW8RWo7dXkj6fKEDNdhIZ99VCI",
    authDomain: "todo-app-b3daa.firebaseapp.com",
    projectId: "todo-app-b3daa",
    storageBucket: "todo-app-b3daa.appspot.com",
    messagingSenderId: "275445590936",
    appId: "1:275445590936:web:910f6951290fe0d1ca19ed",
    measurementId: "G-V2FWM412FS"

  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

export default db 


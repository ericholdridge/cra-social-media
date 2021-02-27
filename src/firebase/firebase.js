import firebase from "firebase";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIRE_KEY,
  authDomain: "crasma-9e004.firebaseapp.com",
  projectId: "crasma-9e004",
  storageBucket: "crasma-9e004.appspot.com",
  messagingSenderId: "59902257211",
  appId: "1:59902257211:web:a2e5455403fdeaa98f541e",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;

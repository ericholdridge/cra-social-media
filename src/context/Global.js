import React, { useState, createContext } from "react";
import firebase from "../firebase/firebase";

export const GlobalContext = createContext();

export const Global = ({ children }) => {
  const ref = firebase.firestore().collection("users");
  const [textarea, setTextarea] = useState("");


  return (
    <GlobalContext.Provider value={{ textarea, setTextarea }}>
      {children}
    </GlobalContext.Provider>
  );
};

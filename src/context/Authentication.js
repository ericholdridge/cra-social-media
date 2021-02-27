import React, { useState, createContext } from "react";
import fire from "../firebase/firebase";

export const AuthenticationContext = createContext();

export const Authentication = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{ email, setEmail, password, setPassword, handleFormSubmit }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

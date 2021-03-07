import React, { useState, createContext } from "react";

export const AuthenticationContext = createContext();

export const Authentication = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userSignedIn, setUserSignedIn] = useState(false);
  const [registerError, setRegisterError] = useState(null);

  return (
    <AuthenticationContext.Provider
      value={{
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        userSignedIn,
        setUserSignedIn,
        registerError,
        setRegisterError,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

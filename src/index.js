import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Authentication } from "./context/Authentication";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Authentication>
      <App />
    </Authentication>
  </React.StrictMode>,
  document.getElementById("root")
);

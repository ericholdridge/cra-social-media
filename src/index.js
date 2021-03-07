import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Authentication } from "./context/Authentication";
import { Global } from "../src/context/Global";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Authentication>
      <Global>
        <App />
      </Global>
    </Authentication>
  </React.StrictMode>,
  document.getElementById("root")
);

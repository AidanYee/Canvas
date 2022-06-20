import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";

// import "dotenv/config";
// require("dotenv").config();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

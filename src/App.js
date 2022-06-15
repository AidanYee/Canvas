import React from "react";
import {BrowserRouter} from 'react-router-dom';
import Map from "./Map";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Map />
      </BrowserRouter>
    </div>
  );
};

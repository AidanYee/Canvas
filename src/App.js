import React from "react";
import {BrowserRouter, Routes, Route,} from 'react-router-dom';
import Map from "./Map";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/:id" element={<Map />}/>
        
        <Route path="/"element={<Map />}/>
        </Routes>
        {/* <Map /> */}
      </BrowserRouter>
    </div>
  );
};

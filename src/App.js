// APP
//-------------------------------------------------------------------
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Map";
import "./styles.scss";
import { MapContainer } from "react-leaflet";
import Nav from "./components/Nav";
//-------------------------------------------------------------------

// -Using React Router we have rendered two map layers:
// 1.) Route /    => The main application where our app renders/runs
// 2.) Route /:id => A seperate route that makes it possible to have a shareable link for any drawing

export default function App() {
  return (
    <div className="App">
      {/* <Nav/> */}
      
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={12}
        center={[49.281, -123.135]}
        zoomControl={false}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<Map />} />

            <Route path="/" element={<Map />} />
          </Routes>
        </BrowserRouter>
      </MapContainer>
    </div>
  );
}

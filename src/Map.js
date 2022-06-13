// MAP FILE
//----------------------------------------------------------------------------------------------------
import { useState } from "react";
import axios from "axios";

import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import Control from "react-leaflet-custom-control";

// SCSS:
//import Button from "material-ui/Button";
import "./styles.css";

// COMPONENTS FROM OUR APP:
import Routing from "./Router";
import DropDownMenu from "./components/DropDownMenu";
import DeletePointButton from "./components/DeletePointButton";
import SaveDrawingButton from "./components/SaveDrawingButton";
import Showcase from "./components/Showcase";

// MUI LIBRARY
//import { StyledEngineProvider } from "@mui/material/styles";

//-----------------------------------------------------------------------------------------------------
// MAP COMPONENT:

const Map = (props) => {
  const [latLong, setLatLong] = useState([]);
  const instance = {
    waypoints: latLong,
    lineOptions: {
      styles: [{ color: "#ff69b4", weight: 12 }],
    },
    // shows directions
    show: true,
    // adds way points by dragging
    addWaypoints: false,
    routeWhileDragging: true,
    // move waypoints by dragging
    draggableWaypoints: true,
    // fits route to the screen
    fitSelectedRoutes: false,
    showAlternatives: false,
  };

  //----------------------------------------------------------------------------------------------------
  // BUTTON COMPONENTS STATE LOGIC:
  // -This will take in the points created as props

  //-------------------------------------------------------------------------------------------
  // GET REQUEST CODE: from mentor call establishing our first successfull get request
  // const saveDrawing = () => {
  //   return axios.get(`${api}`).then((response) => {
  //     console.log(response);
  //   });
  // };
  //-------------------------------------------------------------------------------------------
  // API KEY: (references our .env file)
  const api = process.env.REACT_APP_API;

  //-------------------------------------------------------------------------------------------
  // POST/INSERT NEW DRAWING FUNC: (when called this func POSTS to api server which then INSERTS to the DB)
  const saveDrawing = async () => {
    try {
      await axios.post(`${api}drawings`, latLong);
    } catch (e) {
      return console.log(e);
    }
    setLatLong([]);
  };

  //----------------------------------------------------------------------------------------------------
  // removes last element in state array
  const removeLastPoint = () => {
    setLatLong((prev) => {
      return [...prev.slice(0, -1)];
    });
  };

  //----------------------------------------------------------------------------------------------------
  // MyComponent:
  // -a method from within react-leaflet, that is the library for react-leaflet hooks
  function MyComponent() {
    // useMapEvents is a React Leaflet Hook
    useMapEvents({
      // var map reprsesents the event listener that create a point when a user clicks on the map
      // on-click event to save lat + lng
      click: (e) => {
        const { lat, lng } = e.latlng;
        //console.log("🎲 ~ e.latlng", e.latlng);

        // uses previous state and updates with new state
        setLatLong((prev) => [...prev, L.latLng(lat, lng)]);

        // adds marker to map according to lat, lng
        // L.marker([lat, lng], { icon }).addTo(map);
      },
    });
    return null;
  }

  //----------------------------------------------------------------------------------------------------
  // RENDER:
  return (
    <>
      <MapContainer
        doubleClickZoom={false}
        id="mapId"
        zoom={14}
        center={[49.281, -123.135]}
      >
        {/* <Control prepend position="topleft">
          <img id="logo" src="Canvas_Logo.png" width="200" height="300"></img>
        </Control> */}

        <Control>
          <DropDownMenu></DropDownMenu>
        </Control>

        <Control>
          <Showcase setLatLong={setLatLong}></Showcase>
        </Control>

        <Control prepend position="bottomleft">
          <DeletePointButton removeLastPoint={removeLastPoint}>
            Delete a Point
          </DeletePointButton>

          <SaveDrawingButton saveDrawing={saveDrawing}>
            Save Drawing
          </SaveDrawingButton>
        </Control>

        <MyComponent />

        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=JHPAACJynf7oMojiymA4"
        />
        <Routing instance={instance} />
      </MapContainer>
    </>
  );
};

export default Map;

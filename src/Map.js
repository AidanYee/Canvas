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

import Showcase from "./components/Showcase";
import LoggedInUserMessage from "./components/LoggedInUserMessage";
import SaveForm from "./components/SaveForm"
// import SaveForm from "./components/SaveForm";
// MUI LIBRARY
//import { StyledEngineProvider } from "@mui/material/styles";

//-----------------------------------------------------------------------------------------------------
// MAP COMPONENT:

const Map = (props) => {
  
  const [latLong, setLatLong] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);

  
  const instance = {
    waypoints: latLong,
    lineOptions: {
      styles: [{ color: "#ff69b4", weight: 7
     }],
    },
    
    // RoutingOptions - from leaflet-routing-machine
    routingOptions: {
      //If U-turns are allowed in this route
      allowUTurns: true,
    },
    // shows directions
    show: true,
    // allowUTurn: true,
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
  // COMPONENTS STATE LOGIC:
  // -This will take in the points created as props
  //-------------------------------------------------------------------------------------------
  // POST/INSERT NEW DRAWING FUNC: (when called this func POSTS to api server which then INSERTS to the DB)
   
  // API KEY: (references our .env file)
  const api = process.env.REACT_APP_API;
 
  const saveDrawing = async (name) => {
  
    try {
      await axios.post(`${api}/drawings`, {latLong, name});
    } catch (e) {
      return console.log(e);
    }
    setLatLong([]);
  };

//-------------------------------------------------------------------------------------------
  // LOGIN AND LOG OUT FUNCTIONS:
  // The function is called by onClick loginUser from drop down menu
  //it makes axios request to database for user. It sets the loggedIn state with the particular logged in user object
  const loginUser = async () => {
   
    try {
      const user = await axios.post(`${api}/users/login`);

      console.log("User is Logged In");
      setLoggedIn(user.data);
    } catch (e) {
      return console.log(e);
    }
  };

  const logout = () => {
    setLoggedIn(false);
  };

  //----------------------------------------------------------------------------------------------------
  // -called by onclick in removes last element in state array
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
  

        // uses previous state and updates with new state
        setLatLong((prev) => [...prev, L.latLng(lat, lng)]);

    
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
          <DropDownMenu user={loggedIn} setLatLong={setLatLong} loginUser={loginUser}></DropDownMenu>
        </Control>

        <Control>
          {loggedIn && ( <LoggedInUserMessage
              setLoggedOut={logout}
              prepend
              position="center"
              name={loggedIn.name}
            />
          )}
        </Control>

        <Control prepend position="topleft">
          <Showcase setLatLong={setLatLong}></Showcase>
        </Control>

        <Control prepend position="bottomleft">
          <DeletePointButton removeLastPoint={removeLastPoint}>
            Delete a Point
          </DeletePointButton>
          <SaveForm saveDrawing={saveDrawing}>
          </SaveForm>
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

//-----------------
export default Map;

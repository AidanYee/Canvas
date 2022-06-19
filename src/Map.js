// MAP FILE
//----------------------------------------------------------------------------------------------------
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

// LEAFLET
import { TileLayer, useMapEvents, useMap } from "react-leaflet";
import L from "leaflet";
import Control from "react-leaflet-custom-control";
// import { geosearch } from "esri-leaflet-geocoder";

// SCSS:
import "./styles.css";
// import "esri-leaflet-geocoder/dist/esri-leaflet-geocoder.css";

// COMPONENTS FROM OUR APP:
import Routing from "./Router";
import DropDownMenu from "./components/DropDownMenu";
import DeletePointButton from "./components/DeletePointButton";
import Showcase from "./components/Showcase";
import LoggedInUserMessage from "./components/LoggedInUserMessage";
import SaveForm from "./components/SaveForm";

// MUI
import IconButton from "@mui/material/IconButton";
import StarIcon from "@mui/icons-material/Star";

// ALERT COMPONENTS
import SaveAlerts from "./components/SaveAlerts";
import DeleteAlerts from "./components/DeleteAlerts";
import ClipboardAlerts from "./components/ClipboardAlerts";
import ClickToLogin from "./components/ClickToLogin";
//-----------------------------------------------------------------------------------------------------
// API KEY: (references our .env file)
const api = process.env.REACT_APP_API;
// const GHKEY = process.env.GHKEY;
//-----------------------------------------------------------------------------------------------------

// MAP COMPONENT:
const Map = (props) => {
  //-------------------------------------------------------------------
  // STATE:
  const [latLong, setLatLong] = useState([]);
  console.log(latLong);
  const [loggedIn, setLoggedIn] = useState(false);

  const [showShowcase, setShowShowcase] = useState(true);
  const [showcaseData, setshowcaseData] = useState([]);

  // ALERT RELATED STATES
  const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);
  const [clipboardAlertOpen, setClipboardAlertOpen] = useState(false);
  const [open, setOpen] = useState(false);

  console.log(latLong);

  //-------------------------------------------------------------------
  // INSTANCE OBJECT: -gets passed to L.routing.control in router.js
  const instance = {
    waypoints: latLong,

    lineOptions: {
      styles: [{ color: "#ff69b4", weight: 7 }],
    },

    createMarker: function (i, start, n) {
      return L.marker(start.latLng, {
        opacity: 0,
      });
    },

    router: L.Routing.graphHopper("5e47f16c-3d8f-4b5f-883a-64f41af17262", {
      urlParameters: {
        vehicle: "bike",
      },
    }),

    // RoutingOptions - from leaflet-routing-machine
    routingOptions: {
      //If U-turns are allowed in this route
      allowUTurns: true,
    },

    // shows directions
    show: false,

    // adds way points by dragging
    addWaypoints: false,

    // move waypoints by dragging
    draggableWaypoints: false,

    // fits route to the screen
    fitSelectedRoutes: false,

    collapsible: true,
    routeWhileDragging: true,
    showAlternatives: false,
  };

  //-------------------------------------------------------------------------------------------
  // MAP INSTANCE: -used to apply react-leaflet custom hooks
  const mapInstance = useMap();
  //----------------------------

  // FLY TO DRAWING and FLY TO SHOWCASE FUNCS:
  // -these functions are called in there corresponding components, they get passed the value
  //  of latLong for the selected drawing and use the first element in that array to determine
  //  where the map flies to from wherever it currently is.
  const flyToDrawing = (points) => {
    mapInstance.flyTo(points[0], 12.5, { duration: 3 });
  };

  const showcaseFlyTo = (points) => {
    mapInstance.flyTo(points[50], 13, { duration: 3 });
  };

  //----------------------------------------------------------------------------------------------
  // const mapSearchInstance = useMap();
  // useEffect(() => {
  //   if (!mapSearchInstance) return;
  //   const control = geosearch();
  //   control.addTo(mapSearchInstance);
  // }, [mapSearchInstance]);

  //-------------------------------------------------------------------------------------------
  // POST/INSERT NEW DRAWING FUNC:
  // -when called this func POSTS to the api server which then INSERTS to the DB
  const saveDrawing = async (name) => {
    try {
      await axios.post(`${api}/drawings`, { latLong, name });
    } catch (e) {
      return console.log(e);
    }
    setOpen(true);
    setLatLong([]);
  };

  //-------------------------------------------------------------------------------------------
  // LOGIN AND LOG OUT FUNCTIONS:
  // -The function is called by onClick of Login button in the drop down menu. It makes an axios request to
  //   database for user. It sets the loggedIn state with the particular logged in user object
  const loginUser = async () => {
    console.log("ayoo");
    try {
      const user = await axios.post(`${api}/users/login`);

      setLoggedIn(user.data);
    } catch (e) {
      return console.log(e);
    }
    setLatLong([]);
  };

  //------------------------------------
  const logout = () => {
    setLoggedIn(false);
  };

  //----------------------------------------------------------------------------------------------------
  // REMOVE LAST POINT FUNC: (connected to undo button)
  // -called by onclick in removes last element in the latLong state array
  const removeLastPoint = () => {
    setLatLong((prev) => {
      return [...prev.slice(0, -1)];
    });
  };

  //----------------------------------------------------------------------------------------------------
  // MY COMPONENT FUNC: (REACT-LEAFLET)
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

  //--------------------------------------------------------------------------------
  // -responsible for toggling showcase (featured drawings)
  const handleClose = (event) => {
    if (showShowcase === true) {
      setShowShowcase(false);
    } else {
      setShowShowcase(true);
    }
  };

  //-------------------------------------------------------------------------------------------
  // HANDLE CLIPBOARD FUNC:
  // -is called by the link in the DropDownMenu component and renders an alert to the screen
  const handleClipboard = () => {
    console.log("handle clipboard");
    setClipboardAlertOpen(true);
  };
  //console.log("hi i am at the middle of map");
  //---------------------------------------------------------------------------------------------
  //DROP DOWN MENU LOGIC
  // PARAMS: -a react-router specific custom hook
  const params = useParams();
  //console.log("line 202 params", params);
  //------------------------------------------------------------------------------------------
  // GET DRAWING LINK:
  // -This useEffect makes a get request for drawings by params.id( aka drawing.id)
  // -useEffect fires whenever the value of params.id changes
  useEffect(() => {
    //console.log("Params ID: render the drawing for", params.id);

    if (params.id) {
      const getDrawingLink = async () => {
        // -we pull that value of id out of react-routers param and use it to make the axios request
        const id = params.id;
        console.log("🎲 ~ params.id", params.id);

        try {
          const response = await axios.get(`${api}/shareDrawings/${id}`);
          console.log("drawing link data", response.data);

          setLatLong(response.data.drawing_points);
        } catch (e) {}
      };
      getDrawingLink();
    }
  }, [params.id]);

  //----------------------------------------------------------------------------------------------------
  //------------------------------------------------------------
  // GET SHOWCASE DRAWINGS GET:

  useEffect(() => {
    const getShowcaseDrawings = async () => {
      try {
        const response = await axios.get(`${api}/showcase`);
        setshowcaseData(response.data);
      } catch (e) {
        return console.log(e);
      }
    };
    getShowcaseDrawings();
  }, []);

  //----------------------------------------------------------------------------------------------------
  // MAP COMPONENT RENDER / RETURN:
  return (
    <>
      <Control prepend position="topleft">
        <img
          id="logo"
          height="40"
          src="Canvas_logo_updated3.png"
          position="top-left"
          alt="canvas-logo"
        ></img>
      </Control>

      <Control prepend position="topright">
        <DropDownMenu
          user={loggedIn}
          setLatLong={setLatLong}
          saveDrawing={saveDrawing}
          flyToDrawing={flyToDrawing}
          deleteAlertOpen={deleteAlertOpen}
          setDeleteAlertOpen={setDeleteAlertOpen}
          handleClipboard={handleClipboard}
        ></DropDownMenu>
      </Control>

      <Control>
        {!loggedIn && <ClickToLogin loginUser={loginUser}></ClickToLogin>}

        {loggedIn && (
          <LoggedInUserMessage
            setLoggedOut={logout}
            prepend
            position="center"
            name={loggedIn.name}
          />
        )}
      </Control>

      <Control>
        <div className="ShowcaseButton">
          <IconButton onClick={handleClose} aria-label="delete" size="large">
            <StarIcon fontSize="large" />
          </IconButton>
        </div>
      </Control>

      <Control>
        {showShowcase && (
          <Showcase
            handleFlyTo={showcaseFlyTo}
            setLatLong={setLatLong}
            showcaseData={showcaseData}
          ></Showcase>
        )}
      </Control>

      <Control prepend position="bottomleft">
        <div className="UndoAndSave">
          <DeletePointButton removeLastPoint={removeLastPoint}>
            Delete a Point
          </DeletePointButton>
          {loggedIn && <SaveForm saveDrawing={saveDrawing}></SaveForm>}
        </div>
      </Control>

      <Control>
        <SaveAlerts open={open} setOpen={setOpen}></SaveAlerts>

        <ClipboardAlerts
          clipboardAlertOpen={clipboardAlertOpen}
          setClipboardAlertOpen={setClipboardAlertOpen}
        ></ClipboardAlerts>

        <DeleteAlerts
          deleteAlertOpen={deleteAlertOpen}
          setDeleteAlertOpen={setDeleteAlertOpen}
        ></DeleteAlerts>
      </Control>

      <MyComponent />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://api.maptiler.com/maps/pastel/256/{z}/{x}/{y}.png?key=9omOWDKhGFHaAqNwlejF"
      />
      <Routing instance={instance} />
    </>
  );
};

//-----------------
export default Map;

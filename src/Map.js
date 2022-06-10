import { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
// example from sandbox (non-react)
//import RoutineMachine from "./RoutineMachine";
import L from "leaflet";
// import icon from "./marker";
// our react component  
import Routing from "./RoutingTest";
import Control from 'react-leaflet-custom-control';
import Button from './components/Button';


const Map = (props) => {
  const [latLong, setLatLong] = useState([L.latLng(49.2810, -123.1350)])
  const instance = {
    waypoints: latLong,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    // shows directions
    show: true,
    // adds way points by dragging
    addWaypoints: false,
    routeWhileDragging: true,
    // move waypoints by dragging
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  }

  // const removeLastPoint = () => { 
  //   setLatLong(prev => [...prev.slice(0, -1)])
  //   console.log("🎲 ~ removeLastPoint", removeLastPoint);
  // };
  

  
  // MyComponent is a method from within react-leaflet, that is the library for react-leaflet hooks
  function MyComponent() {
  
    // useMapEvents is a React Leaflet Hook
   useMapEvents({
      // var map reprsesents the event listener that create a point when a user clicks on the map
      // on-click event to save lat + lng
      click: (e) => {
        const { lat, lng } = e.latlng;
        // console.log("🎲 ~ e.latlng", e.latlng);
        
        // uses previous state and updates with new state
        setLatLong(prev => [...prev, L.latLng(lat, lng)])
  
        // adds marker to map according to lat, lng
        // L.marker([lat, lng], { icon }).addTo(map);
      }
    });
    return null;
  }
  return (
    <>
    <MapContainer
      doubleClickZoom={false}
      id="mapId"
      zoom={14}
      center={[49.2810, -123.1350]}
      >
      
    <Control prepend position="bottomleft">
          <Button setLatLong={setLatLong}>Delete a Point</Button>
    </Control>
    
    <MyComponent/>
      
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
import { useState } from "react";
import { MapContainer, TileLayer, MapConsumer, useMapEvents } from "react-leaflet";
// example from sandbox (non-react)
//import RoutineMachine from "./RoutineMachine";
import L from "leaflet";
import icon from "./marker";
// our react component  
import Routing from "./RoutingTest";
import Control from 'react-leaflet-custom-control';
import ClickableButton from './components/Button';


const Map = (props) => {
  const [latLong, setLatLong] = useState([L.latLng(49.2810, -123.1350),L.latLng(49.2850, -123.1310)])
  const instance = {
    waypoints: latLong,
    lineOptions: {
      styles: [{ color: "#6FA1EC", weight: 4 }]
    },
    // shows directions
    show: true,
    // adds way points by dragging
    addWaypoints: true,
    routeWhileDragging: true,
    // move waypoints by dragging
    draggableWaypoints: true,
    fitSelectedRoutes: true,
    showAlternatives: false,
  }

  

// -the goal of this function is when called it removes the last created point from the instance object
// -the instance obj stores the points in an array caled latLng which is a state within the Map component
// -using a custom hook we want to modify the latLng state via a new setState called setHistory
// -when the function is called the  useVisualMode hook is triggered and it pops off the last element in the array

  const removeLastPoint = (latLong) => {

    // // console.log("removeLastPoint has been called")
    
    // const [history, setHistory] = useState([latLong]);

    // if (history.length > 1) {
        
    //   setHistory(prev => [
    //     ...prev.pop()

    //   ]);
    // }

  };

  
  // MyComponent is a method from within react-leaflet, that is the library for react-leaflet hooks
  function MyComponent() {
  
    // useMapEvents is a React Leaflet Hook
    const map = useMapEvents({
      // var map reprsesents the event listener that create a point when a user clicks on the map
      // on-click event to save lat + lng
      click: (e) => {
        const { lat, lng } = e.latlng;
        // console.log("🎲 ~ e.latlng", e.latlng);
        
        // uses previous state and updates with new state
        setLatLong(prev => [...prev, L.latLng(lat, lng)])
  
        // adds marker to map according to lat, lng
        L.marker([lat, lng], { icon }).addTo(map);
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
          <ClickableButton onClick={removeLastPoint()}>Delete a Point</ClickableButton>
    </Control>
    <Control prepend position="bottomleft">
          <ClickableButton >New Button</ClickableButton>
    </Control>
    <Control prepend position="bottomleft">
          <ClickableButton >Save</ClickableButton>
    </Control>
    
    <MyComponent/>
      
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.maptiler.com/maps/pastel/{z}/{x}/{y}.png?key=JHPAACJynf7oMojiymA4"
        />
      <Routing instance={instance} />
      
      <MapConsumer>
        {(map) => {
          console.log("map center:", map.getCenter());
          map.on("click", function (e) {
            const { lat, lng } = e.latlng;
            L.marker([lat, lng], { icon }).addTo(map);
          });
          return null;
        }}
      </MapConsumer>

    </MapContainer>
    </>
  );
};

export default Map;
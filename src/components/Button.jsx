// BUTTON COMPONENT:
import React from "react";
// import L from "leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";


function Button(props) { 

  const removeLastPoint = () => {
    console.log("removeLastPoint has been called, but the func has no code");
  };
  
  return (
    <button onClick={removeLastPoint}>Remove Last Point</button>
  );
};

export default Button;

// BUTTON COMPONENT:
import React from "react";
// import L from "leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";

function Button(props) {
  console.log("🎲 ~ props", props);

  const removeLastPoint = () => {
    props.setLatLong((prev) => {
      if (prev.length > 1) {
        return [...prev.slice(0, -1)];
      }
      return prev;
    });
  };

  return <button onClick={removeLastPoint}>Remove Last Point</button>;
}

export default Button;

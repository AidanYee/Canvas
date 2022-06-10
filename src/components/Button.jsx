// BUTTON COMPONENT:
import React from "react";
// import Stack from '@mui/material/Stack'
// import Button from "@mui/material/Button";
// import L from "leaflet";
// import { useEffect } from "react";
// import { useMap } from "react-leaflet";


function ClickableButton(props) { 

  const removeLastPoint = () => {
    console.log("removeLastPoint has been called, but the func has no code");
  };

  return (
    <ClickableButton onClick={removeLastPoint}>Remove Last Point</ClickableButton>
  );
};

export default ClickableButton;

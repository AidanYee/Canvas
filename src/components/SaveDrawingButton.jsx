import React from "react";
import "./SaveDrawingButton.scss";
import Button from "@material-ui/core/Button";

function SaveDrawingButton(props) {
  const saveDrawing = () => {
    console.log(
      "u pressed the save button, it called the savebuttoncomponent, which has no code yet"
    );
  };

  return (
    <Button id="save-button" variant="contained" onClick={saveDrawing}>
      SAVE
    </Button>
  );
}

export default SaveDrawingButton;

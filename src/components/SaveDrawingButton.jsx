import React from "react";
import "./SaveDrawingButton.scss";
import Button from "@material-ui/core/Button";

function SaveDrawingButton(props) {
  return (
    <Button id="save-button" variant="contained" onClick={props.saveDrawing}>
      SAVE
    </Button>
  );
}

export default SaveDrawingButton;

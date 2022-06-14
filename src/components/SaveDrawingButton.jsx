import React from "react";

import Button from "@mui/material/Button";

//scss imports should be last
import "./SaveDrawingButton.scss";

function SaveDrawingButton(props) {
  return (
    <Button id="save-button" variant="contained" onClick={props.saveDrawing}>
      SAVE
    </Button>
  );
}

export default SaveDrawingButton;

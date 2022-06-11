// DeletePointButton COMPONENT:
import React from "react";
import Button from "@material-ui/core/Button";
import "./DeletePointButton.scss";

function DeletePointButton(props) {
  console.log("🎲 ~ props", props);

  return (
    <Button
      id="undo-button"
      variant="contained"
      onClick={props.removeLastPoint}
    >
      UNDO
    </Button>
  );
}

export default DeletePointButton;

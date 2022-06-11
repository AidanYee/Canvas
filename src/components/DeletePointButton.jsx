// DeletePointButton COMPONENT:
import React from "react";
import Button from "@material-ui/core/Button";
import "./DeletePointButton.scss";

function App() {
  return <Button variant="contained">Hello World</Button>;
}

function DeletePointButton(props) {
  console.log("🎲 ~ props", props);

  // removes last element in state array
  const removeLastPoint = () => {
    props.setLatLong((prev) => {
      return [...prev.slice(0, -1)];
    });
  };

  return (
    <Button id="undo-button" variant="contained" onClick={removeLastPoint}>
      UNDO
    </Button>
  );
}

export default DeletePointButton;

// DeletePointButton COMPONENT:
import React from "react";

function DeletePointButton(props) {
  console.log("🎲 ~ props", props);

  // removes last element in state array
  const removeLastPoint = () => {
    props.setLatLong((prev) => {
      //
      if (prev.length > 1) {
        return [...prev.slice(0, -1)];
      }
      return prev;
    });
  };

  return <button onClick={removeLastPoint}>Remove Last Point</button>;
}

export default DeletePointButton;

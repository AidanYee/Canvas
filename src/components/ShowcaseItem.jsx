import * as React from "react";
import Button from "@mui/material/Button";

//-------------------------------------------------------------------------------------------
// SHOWCASE ITEM COMPONENT:
// -each showcaseitem component is a button that when clicked calls the ShowcaseItem func
// -the func calls the setLatLong function (which was propsdrilled from map.js) with the
//  value of props.points as the funcs argument
export default function ShowcaseItem(props) {
  console.log("name", props.name);
  console.log("points", props.points);

  function renderShowcasePoints() {
    return props.setLatLong(props.points);
  }

  return (
    <Button onClick={renderShowcasePoints} size="small">
      {props.name}
    </Button>
  );
}
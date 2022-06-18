// SHOWCASE ITEM COMPONENT:
//-------------------------------------------------------------------------------------------
import * as React from "react";

// CSS:
import Button from "@mui/material/Button";
import "./ShowcaseItem.scss";

//-------------------------------------------------------------------------------------------
// SHOWCASE ITEM COMPONENT:
// -each showcaseitem component is a button that when clicked calls the ShowcaseItem func
// -the func calls the setLatLong function (which was propsdrilled from map.js) with the
//  value of props.points as the funcs argument
export default function ShowcaseItem(props) {
 
  function renderShowcasePoints() {
    props.handleFlyTo(props.points);
    return props.setLatLong(props.points);
  }

  return (
    <Button onClick={renderShowcasePoints} size="small">
      {props.name}
    </Button>
  );
}

// DRAWING ITEM COMPONENT:

import Button from "@mui/material/Button";
//----------------------------------------------
// -many drawingItem components are rendered in the DropDownMenu component

export default function DrawingItem(props) {

  function renderDrawingPoints() {
    return props.setLatLong(props.points);
  }

  return (
    <Button onClick={renderDrawingPoints} size="small">
      {props.name}
    </Button>
  );
}


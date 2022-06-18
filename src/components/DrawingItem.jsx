// DRAWING ITEM COMPONENT:
//-----------------------------------------------------------------------
import Button from "@mui/material/Button";

//-----------------------------------------------------------------------
// DRAWING ITEM COMPONENT:
// -many drawingItem components are rendered in the DropDownMenu component

export default function DrawingItem(props) {

  function renderDrawingPoints() {
    
    props.flyToDrawing(props.points);
    props.setLatLong(props.points);
    return;
  }

  return (
    <Button onClick={renderDrawingPoints} size="small">
      {props.name}
    </Button>
  );
}

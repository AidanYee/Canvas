// DELETE DRAWING BUTTON COMPNENT:
//-------------------------------------------------------------------
//import axios from "axios";
import "./DeleteDrawingButton.scss";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

//-------------------------------------------------------------------
// API KEY (for Axios requests)
//const api = process.env.REACT_APP_API;
//-------------------------------------------------------------------

const DeleteDrawingButton = (props) => {
  //console.log("props in delete button", props.id);
  const handleDeleteDrawing = () => {
    props.onDelete(props.id)
    props.deleteDrawing(props.id)
    //console.log("delete click")
    console.log("props id", props.id)
}

  

  //-------------------------------------------------------------------
  // COMPONENT RETURN / RENDER:
  return (
    <IconButton
      className="DeleteButton"
      aria-label="delete"
      size="small"
      id={props.id}
      onClick={handleDeleteDrawing}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteDrawingButton;

// DELETE DRAWING BUTTON COMPNENT:
//-------------------------------------------------------------------

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

//-------------------------------------------------------------------

const DeleteDrawingButton = (props) => {
  const clickDeleteDrawing = () => {
    props.onDelete(props.id);
    props.deleteDrawing(props.id);
  };

  //-------------------------------------------------------------------
  // COMPONENT RETURN / RENDER:
  return (
    <IconButton
      className="DeleteButton"
      aria-label="delete"
      size="small"
      id={props.id}
      onClick={clickDeleteDrawing}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteDrawingButton;

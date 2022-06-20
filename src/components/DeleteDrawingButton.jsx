// DELETE DRAWING BUTTON COMPNENT:
//-------------------------------------------------------------------
import axios from "axios";
import "./DeleteDrawingButton.scss";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

//-------------------------------------------------------------------
// API KEY (for Axios requests)
const api = process.env.REACT_APP_API;
//-------------------------------------------------------------------

const DeleteDrawingButton = (props) => {
  //console.log("props in delete button", props.id);

  const deleteDrawing = () => {
    
    const id = props.id;

    axios
      .delete(`${api}/drawings/${id}`)
      .then(() => {
        
        props.onDelete(id);
        props.setDeleteAlertOpen(true);
        props.setLatLong([]);
      })

      .catch((e) => {
        return console.log(e);
      });
  };

  //-------------------------------------------------------------------
  // COMPONENT RETURN / RENDER:
  return (
    <IconButton
      className="DeleteButton"
      aria-label="delete"
      size="small"
      id={props.id}
      onClick={deleteDrawing}
    >
      <DeleteIcon />
    </IconButton>
  );
};

export default DeleteDrawingButton;

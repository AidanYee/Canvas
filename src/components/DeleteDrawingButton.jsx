// import Button from "@mui/material/Button";
import axios from "axios";
import "./DeleteDrawingButton.scss";

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

// API KEY (for Axios requests)
const api = process.env.REACT_APP_API;

const DeleteDrawingButton = (props) => {
  //console.log("props in delete button", props.id);

  const deleteDrawing = () => {
    console.log("Delete axios request func");
    //console.log("drawing", props.id);
    const id = props.id;

    axios
      .delete(`${api}/drawings/${id}`)
      .then((res) => {
        console.log(res);
        props.onDelete(id);
        props.setDeleteAlertOpen(true);
      })

      .catch((e) => {
        return console.log(e);
      });
  };

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

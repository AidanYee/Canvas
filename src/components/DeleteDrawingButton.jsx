import Button from "@mui/material/Button";
import axios from "axios";

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
      })

      .catch((e) => {
        return console.log(e);
      });
  };

  return (
    <Button id={props.id} onClick={deleteDrawing}>
      DELETE
    </Button>
  );
};

export default DeleteDrawingButton;

import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function SaveForm(props) {
//console.log("SaveForm Component props: ", props);
  const [open, setOpen] = useState(false);

  const [drawingName, setDrawingName] = useState(" ");
  
    const saveOnClick = () => {
    //console.log("Hi there", drawingName);  
    props.saveDrawing(drawingName);
    handleClose()
  };

  //----------------------------------
  // TEMPLATE FUNCTIONS
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setDrawingName("");
    setOpen(false);
  };

//------------------------------------------------------------------------------------------

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Your Drawing</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Name your drawing and save it, to add it to your drawing library
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Drawing Name"
            type="Drawing Name"
            fullWidth
            variant="standard"
            value={drawingName}
            onChange={(e) => setDrawingName(e.target.value)}
          
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={drawingName.length > 3 ? false : true} onClick={saveOnClick}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
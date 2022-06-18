// SAVE ALERT COMPONENT:
//-------------------------------------------------------------------------------
import * as React from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//-------------------------------------------------------------------------------

export default function SaveAlerts(props) {

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  const handleClick = () => {
    props.setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setOpen(false);
  };


  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.open}
        autoHideDuration={3500}
        onClose={handleClose}
        sx={{ width: "25%" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Drawing Saved !
        </Alert>
      </Snackbar>
    </Stack>
  );
}

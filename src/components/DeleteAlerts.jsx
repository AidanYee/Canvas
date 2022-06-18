// DELETE ALERT COMPONENT:
//-------------------------------------------------------------------------------
import * as React from "react";

import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

//-------------------------------------------------------------------------------

export default function DeleteAlerts(props) {

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  // const handleClick = () => {
  //   props.setDeleteAlertOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setDeleteAlertOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.deleteAlertOpen}
        autoHideDuration={3500}
        onClose={handleClose}
        sx={{ width: "25%" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Drawing deleted
        </Alert>
      </Snackbar>
    </Stack>
  );
}

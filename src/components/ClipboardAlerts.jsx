// CLIPBOARD ALERT COMPONENT:
//-------------------------------------------------------------------------------
import * as React from "react";

import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";

//-------------------------------------------------------------------------------
export default function ClipboardAlerts(props) {

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

  // const handleClick = () => {
  //   props.setClipboardAlertOpen(true);
  // };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    props.setClipboardAlertOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={props.clipboardAlertOpen}
        autoHideDuration={3500}
        onClose={handleClose}
        sx={{ width: "25%" }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
          Drawing copied to Clipboard!
        </Alert>
      </Snackbar>
    </Stack>
  );
}



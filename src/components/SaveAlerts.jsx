import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

export default function SaveAlerts(props) {
  
  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={props.open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Drawing Saved!
        </Alert>
      </Collapse>
    </Box>
  );
}
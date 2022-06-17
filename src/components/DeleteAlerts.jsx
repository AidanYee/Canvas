import * as React from "react";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";

export default function DeleteAlerts(props) {
  // const [deleteAlertOpen, setDeleteAlertOpen] = useState(false);

  return (
    <Box sx={{ width: "100%" }}>
      <Collapse in={props.deleteAlertOpen}>
        <Alert
          severity="error"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                props.setDeleteAlertOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Drawing Deleted!
        </Alert>
      </Collapse>
    </Box>
  );
}

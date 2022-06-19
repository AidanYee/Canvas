//-------------------------------------------------------------------
import React from "react";

import { Button } from "@mui/material";
import Typography from '@mui/material/Typography';
// CSS:
import "./LoggedInUserMessage.scss";
//-------------------------------------------------------------------

// -This component renders the logged in users name when state is set
const LoggedInUserMessage = (props) => {
  //console.log("logged in user props", props);
  const logout = () => {
    props.setLoggedOut();
  };

  return (
    <>
      <div className="WelcomeMessage">
        <Typography className="WelcomeText" variant="h5" component="h2">
          Welcome, {props.name}!
        </Typography>

        {/* <Button className="WelcomeMessage" variant="string">
          G Day! {props.name}
        </Button> */}
        <div className="logoutbutton">
          <Button
            id="logout"
            sx={
              {
                // borderRadius: 50,
              }
            }
            onClick={logout}
            variant="contained"
            color="error"
          >
            Logout
          </Button>
        </div>
      </div>
    </>
  );
};

export default LoggedInUserMessage;

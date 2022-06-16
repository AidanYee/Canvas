//-------------------------------------------------------------------
import React from "react";

import { Button } from "@mui/material";

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
      <Button className="WelcomeMessage" variant="text">
        G Day! {props.name}
      </Button>
      <Button
        sx={{
          borderRadius: 50,
        }}
        onClick={logout}
        variant="outlined"
        color="error"
      >
        Logout
      </Button>
    </>
  );
};

export default LoggedInUserMessage;

//-------------------------------------------------------------------
import React from "react";

import { Button } from "@mui/material";

// CSS:
import "./LoggedInUserMessage.scss";
//-------------------------------------------------------------------

// -This component renders the logged in users name when state is set
const ClickToLogin = (props) => {
  //console.log("logged in user props", props);
  const clickLogin = () => {
    props.loginUser();
  };

  return (
    <>
      <Button
        sx={{
          borderRadius: 50,
        }}
        onClick={clickLogin}
        variant="outlined"
        color="success"
      >
        Login
      </Button>
    </>
  );
};

export default ClickToLogin;

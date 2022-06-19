// CLICK TO LOGIN COMPONENT:
//-------------------------------------------------------------------
import React from "react";

// CSS:
import { Button } from "@mui/material";
import "./ClickToLogin.scss";

//-------------------------------------------------------------------

// -This component renders the logged in users name when state is set
const ClickToLogin = (props) => {
  //console.log("logged in user props", props);
  const clickLogin = () => {
    props.loginUser();
  };

  return (
    <>
      <div className="login">
        <Button
          id="loginButton"
          sx={{
            // borderRadius: 50,
          }}
          onClick={clickLogin}
          variant="contained"
          color="success"
        >
          Login
        </Button>
      </div>
    </>
  );
};

export default ClickToLogin;

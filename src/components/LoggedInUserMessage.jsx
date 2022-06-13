import React from "react";
import { Button } from "@mui/material";

const LoggedInUserMessage = (props) => {
  console.log("logged in user props", props);
  const logout = () => {
    props.setLoggedOut();
  };
  return (
    <>
      <Button variant="text">Welcome Name</Button>
      <Button onClick={logout} variant="text">
        Logout
      </Button>
    </>
  );
};

export default LoggedInUserMessage;

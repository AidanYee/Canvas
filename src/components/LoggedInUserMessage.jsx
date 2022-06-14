import React from "react";
import { Button } from "@mui/material";

const LoggedInUserMessage = (props) => {
  //This component renders the logged in users name when state is set 
  console.log("logged in user props", props);
  const logout = () => {
    props.setLoggedOut();
  };

  return (
    <>
      <Button variant="text">G Day! {props.name}</Button>
      <Button onClick={logout} variant="text">
        Logout
      </Button>
    </>
  );
};

export default LoggedInUserMessage;

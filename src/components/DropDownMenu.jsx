// DROP DOWN MENU COMPONENT:
//----------------------------------------------------------------
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

// APP FILES:
import DrawingItem from "./DrawingItem";

// CSS:
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GestureIcon from "@mui/icons-material/Gesture";
import LoginIcon from "@mui/icons-material/Login";

//----------------------------------------------------------------
const api = process.env.REACT_APP_API;
//-------------------------------------
//
export default function DropDownMenu(props) {
  //console.log("🎲 ~ props drop down menu", props);

  const [drawingData, setDrawingData] = useState([]);
  const params = useParams();
  //console.log("drawing data", drawingData);
  

  //This useEffect makes a get request for drawings by params.id(drawing_id)
  //useEffect fires again when params.id changes
  useEffect(() => {
    //console.log("Params ID: render the drawing for", params.id);

    const getDrawingLink = async () => {
      const id = params.id;

      try {
        const response = await axios.get(`${api}/shareDrawings/${id}`);
        //console.log("drawing link", response.data);
      
        props.setLatLong(response.data.drawing_points)
      } catch (e) {
        return console.log(e);
      }
      
    };
    getDrawingLink();
  }, [params.id]);

  //console.log("params", params);
  
  //------------------------------------------------------------------------------------------
  // -this UseEffect triggers getDrawingsForUser func that makes the axios post for the drawings of a given user and returns it below
  //  where it is turned into a series of Drawing Item component renders
  // *NOTE* user data is brought in as props from loggedIn state ***
  useEffect(() => {
    const getDrawingsForUser = async () => {
      const id = props.user;
  
      try {
        const response = await axios.post(`${api}/getDrawings`, id);
        setDrawingData(response.data);
        
      } catch (e) {
        return console.log(e);
      }
    };
  getDrawingsForUser();
  }, [props.user])
  
  //------------------------------------------------------------------------
  // -When called this function toggles login related state
  const clickLogin = () => {
    props.loginUser();
  };

  //------------------------------------------------------------------------
  // MUI OPENING AND CLOSING MENU CODE:
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 500 }}
      role="presentation"
      onClick={toggleDrawer(anchor, true)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List>
        {["Login"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <LoginIcon />
              </ListItemIcon>
              <ListItemText onClick={clickLogin} primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Drawing Library"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <GestureIcon />
              </ListItemIcon>
              <ListItemText  primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        {drawingData.map((drawing) => {
          return (
            <React.Fragment key={drawing.id}>
              <Link to={`/${drawing.id}`}>{drawing.drawing_name}</Link>
              <DrawingItem
                setLatLong={props.setLatLong} /*prop drilled from map.js */
                name={drawing.drawing_name}
                points={drawing.drawing_points}
              />
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

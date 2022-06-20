// DROP DOWN MENU COMPONENT:
//----------------------------------------------------------------
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// APP FILES:
import DrawingItem from "./DrawingItem";
import DeleteDrawingButton from "./DeleteDrawingButton";

// CSS:
import "./DropDownMenu.scss";

// import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
// import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import GestureIcon from "@mui/icons-material/Gesture";
import LunchDiningRounded from "@mui/icons-material/LunchDiningRounded";
import ShareIcon from "@mui/icons-material/Share";

// API KEY (for Axios requests)
const api = process.env.REACT_APP_API;
//----------------------------------------------------------------

// COMPONENT DECLERATION:
export default function DropDownMenu(props) {
  //console.log("🎲 ~ props drop down menu", props);
  const [isOpen, setIsOpen] = useState(false);
  const [drawingData, setDrawingData] = useState([]);
  

  //------------------------------------------------------------------------------------------
  // GET DRAWINGS FOR USER:
  // -this UseEffect triggers getDrawingsForUser func that makes the axios post for the drawings of a given user and returns it below
  //  where it is turned into a series of Drawing Item component renders
  // *NOTE* user data is brought in as props from loggedIn state ***
  useEffect(() => {

    if (props.user) {
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
    }
  }, [props.user, props.saveDrawing]);

  //------------------------------------------------------------------------
  // ON DELETE FUNCTION: -is called by Onclick in render below

  const onDelete = (id) => {
    const newDrawingData = drawingData.filter(
      (drawingData) => drawingData.id !== id
    );

    setDrawingData(newDrawingData);
  };

  //------------------------------------------------------------------------
  // MUI OPENING AND CLOSING MENU CODE:

  const toggleDrawer = (event) => {
    
    setIsOpen(!isOpen);
    
  };

  const list = () => (
    
    <Box
      sx={{ width: 400}}
      role="presentation"
      onClick={toggleDrawer} 
    >
      <List>
        {props.user &&
          ["Drawing Library"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GestureIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
      </List>
      <Divider />
      <List>
        {drawingData.map((drawing) => {
          return (
            <React.Fragment key={drawing.id}>
              <div className="Drawings-For-User">
                <DrawingItem
                  setLatLong={props.setLatLong} /*prop drilled from map.js */
                  name={drawing.drawing_name}
                  points={drawing.drawing_points}
                  flyToDrawing={props.flyToDrawing}
                />
                <div className="DeleteAndShare">
                  <div className="ShareButton">
                    <Link to={`/${drawing.id}`}>
                      <ShareIcon
                        onClick={() => {
                          props.handleClipboard();
                          navigator.clipboard.writeText(
                            process.env.REACT_APP_LINK+`/${drawing.id}`
                          );
                        }}
                      />
                    </Link>
                  </div>
                  <div className="DeleteButton">
                    <DeleteDrawingButton
                      deleteDrawing={props.deleteDrawing}
                      //setDeleteAlertOpen={props.setDeleteAlertOpen}
                      onDelete={(id) => onDelete(id)}
                      id={drawing.id}
                      //setLatLong={props.setLatLong}
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </List>
    </Box>
  );
  //------------------------------------------------------------------------------------------
  // COMPONENT RETURN/ RENDER:

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <LunchDiningRounded
            className="LunchDiningRounded"
            fontSize="large"
            onClick={toggleDrawer} 
          >
            {anchor}
          </LunchDiningRounded>
          <Drawer
            transitionDuration={{ enter: 500, exit: 500 }}
            onClick={toggleDrawer} 
            anchor={"right"} 
            open={isOpen} 
            onClose={toggleDrawer} 
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}




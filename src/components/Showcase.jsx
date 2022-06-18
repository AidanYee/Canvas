// SHOWCASE COMPONENT:
//-------------------------------------------------------------------
import React from "react";
// MUI CSS
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShowcaseItem from "./ShowcaseItem";
//-------------------------------------------------------------------

// -when called this func gets all the showcase drawings from the DB via express api
export default function Showcase(props) {
  //console.log(props);

  return (
    <Box sx={{ minWidth: 275 }}>
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            Featured Drawings!
          </Typography>
          <Typography variant="h9" component="div">
            Checkout our featured community drawings
          </Typography>
        </CardContent>
        <CardActions style={{ height: "400px", overflowY: "scroll" }}>
          {/* map through the get response data and render a new showcaseItem for each value */}
          <List>
            {props.showcaseData.map((drawing) => {
              return (
                <React.Fragment key={drawing.id}>
                  <ShowcaseItem
                    handleFlyTo={props.handleFlyTo}
                    setLatLong={props.setLatLong} /*prop drilled from map.js */
                    name={drawing.drawing_name}
                    points={drawing.drawing_points}
                  />
                </React.Fragment>
              );
            })}
          </List>
        </CardActions>
      </React.Fragment>
    </Box>
  );
}

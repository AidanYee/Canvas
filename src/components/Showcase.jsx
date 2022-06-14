// SHOWCASE COMPONENT:
//-------------------------------------------------------------------
import React, { useEffect, useState } from "react";
import axios from "axios";

// MUI CSS
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ShowcaseItem from "./ShowcaseItem";
//-------------------------------------------------------------------
// API KEY: (references our .env file)
const api = process.env.REACT_APP_API;

// -when called this func gets all the showcase drawings from the DB via express api
export default function Showcase(props) {
  //console.log(props);
  const [showcaseData, setshowcaseData] = useState([]);
  useEffect(() => {
    const getShowcaseDrawings = async () => {
      try {
        const response = await axios.get(`${api}/showcase`);
        setshowcaseData(response.data);
      } catch (e) {
        return console.log(e);
      }
    };
    getShowcaseDrawings();
  }, []);

  return (
    <Box sx={{ minWidth: 275 }}>
      <React.Fragment>
        <CardContent>
          <Typography variant="h5" component="div">
            Showcase
          </Typography>
          <Typography variant="h9" component="div">
            Example Showcase
          </Typography>
        </CardContent>
        <CardActions>
          {/* map through the get response data and render a new showcaseItem for each value */}
          {showcaseData.map((drawing) => {
            return (
              <React.Fragment key={drawing.id}>
                <ShowcaseItem
                  setLatLong={props.setLatLong} /*prop drilled from map.js */
                  name={drawing.drawing_name}
                  points={drawing.drawing_points}
                />
              </React.Fragment>
            );
          })}
        </CardActions>
      </React.Fragment>
    </Box>
  );
}

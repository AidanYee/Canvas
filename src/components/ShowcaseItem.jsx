// SHOWCASE ITEM COMPONENT:
//-------------------------------------------------------------------------------------------
import * as React from "react";

// CSS:
import {
  Card,
  Button,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

import "./ShowcaseItem.scss";

//-------------------------------------------------------------------------------------------
// SHOWCASE ITEM COMPONENT:
// -each showcaseitem component is a button that when clicked calls the ShowcaseItem func
// -the func calls the setLatLong function (which was propsdrilled from map.js) with the
//  value of props.points as the funcs argument
export default function ShowcaseItem(props) {
  function renderShowcasePoints() {
    props.handleFlyTo(props.points);
    return props.setLatLong(props.points);
  }

  let screenshot = "";
  if (props.name === " Lighthouse") {
    screenshot = "/lighthouse_showcase_image.png";
  } else if (props.name === "orca stra") {
    screenshot = "/orca-stra.png";
  } else if (props.name === " IM STOKED") {
    screenshot = "/im-stoked.png";
  } else if (props.name === " Guy with Hair") {
    screenshot = "/guy_with_hair.png";
  }

  return (
    <Card className="showcase-item">
      <CardMedia
        className="showcase-drawing-image"
        height="125"
        component="img"
        image={screenshot}
        onClick={renderShowcasePoints}
      />

      <Button
        className="FeaturedNames"
        onClick={renderShowcasePoints}
        size="small"
      >
        {props.name}
      </Button>
    </Card>
  );
}

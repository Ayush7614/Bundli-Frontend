import { Typography } from "@mui/material";
import React from "react";

import Media from "./Media";

const Heading = ({ children, color, center }) => {

  const { matches, phone } = Media();

  return (

    <Typography
      variant={(phone && "h5") || (matches && "h4") || "h3"}
      sx={{
        
        textAlign: center ? "center" : "default",
        fontWeight: 500,
        color: color ? color : "white",
      }}
    >
      {children}
    </Typography>
  );

};

export default Heading;

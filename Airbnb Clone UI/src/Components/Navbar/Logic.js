import React, { useState } from "react";
const Logic = () => 
{

  const [currNav, setCurrNav] = useState("");

  const handleNav = (click) => 
  {

    click === "Places to stay" && setCurrNav("Places to stay");
    click === "Experiences" && setCurrNav("Experiences");
    click === "Online Experiences" && setCurrNav("Online Experiences");

  };

  return { handleNav, currNav };
  
};

export default Logic;

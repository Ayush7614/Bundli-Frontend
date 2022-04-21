import useMediaQuery from "@mui/material/useMediaQuery";

const Media = () => {
  const matches = useMediaQuery("(max-width:1050px)");
  const textTrim = useMediaQuery("(max-width:793px)");
  
  const phone = useMediaQuery("(max-width:800px)");

  return { matches, textTrim, phone };
};

export default Media;

import { Container, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Heading from "../../Utils/Heading";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Media from "../../Utils/Media";

const Footer = () => {
  const { phone } = Media();

  return (
    <Box sx={{ width: "100%", backgroundColor: "#F7F7F7" }}>
      <Container
        maxWidth='1380px'
        sx={{
          maxWidth: "1380px",
          width: "100%",
          display: "flex",
          gap: 1,
          flexDirection: "column",
          paddingBlock: 2,
        }}
      >
        <Heading color='#ff1493'>airbnb UI Clone</Heading>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            flexDirection: { xs: "column", sm: "row" },
            gap: { xs: 1.5, sm: 0 },
          }}
        >
          <Typography>airbnb ui clone using reactjs</Typography>
          <Box>

            <IconButton
              href=''
              target='_blank'
            >
              <InstagramIcon sx={{ color: "#ff1493" }} />
            </IconButton>
            <IconButton href='' target='_blank'>
              <TwitterIcon sx={{ color: "#ff1493" }} />
            </IconButton>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;

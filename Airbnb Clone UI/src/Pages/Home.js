import { Button, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";

import React from "react";
import { customTheme } from "../Utils/Theme";
import Media from "../Utils/Media";
import FlexibleDes from "../sections/FlexibleDes";

import Discover from "../sections/Discover";
import Heading from "../Utils/Heading";
import Experiences from "../sections/Experiences";

const Home = () => {

  const { matches, phone } = Media();

  return (

    <ThemeProvider theme={customTheme}>
      <Box
        sx={{

          height: phone ? "70vh" : "98vh",
          width: "100%",
          backgroundColor: "primary.black",
          paddingTop: (phone && "13vh") || (matches && "40vh") || "35vh",
        }}
      >
        <Container maxWidth='1380px' sx={{ maxWidth: "1380px" }}>
          <Box
            sx={{

              backgroundColor: "primary.main",
              color: "white",
              height: "50vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 5,
              gap: 3.5,
              paddingInline: 3,
            }}
          >
            <Heading center>Help house 100,000 refuges fleeing Ukraine</Heading>
            <Button
              variant='outlined'
              sx={{

                color: "primary.white",
                borderColor: "primary.white",
                "&:hover": { borderColor: "primary.white" },
              }}
            >
              Learn more
            </Button>
          </Box>

        </Container>
      </Box>

      <FlexibleDes />
      <Discover />
      
      <Experiences />
    </ThemeProvider>
  );
};

export default Home;

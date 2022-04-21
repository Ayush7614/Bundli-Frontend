import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import Heading from "../Utils/Heading";
import bg from "../Utils/images/house.jpg";
import Media from "../Utils/Media";

const FlexibleDes = () => {

  const { matches, phone } = Media();

  return (

    <Box
      sx={{

        backgroundImage: "linear-gradient(180deg, black 50%, white 50%)",
        height: phone ? "50vh" : "85vh",
        width: "100%",
        mb: 13,
      }}
    >
      <Container
        maxWidth='1380'
        sx={{
          
          maxWidth: "1380px",
          height: "100%",
        }}
      >
        <Box
          sx={{

            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), transparent), url(${bg})`,
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            pt: 10,
          }}
        >
          <Box
            sx={{

              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              paddingInline: 3,
            }}
          >
            <Heading center>Let your curiosity do the booking!</Heading>

            <Button
              variant='contained'
              sx={{

                borderRadius: 50,
                fontSize: (phone && 14) || (matches && 18) || 20,
                "&:hover": { backgroundColor: "rgba(255, 56, 92, 0.9)" },
              }}
            >
              I am flexible
            </Button>

          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default FlexibleDes;

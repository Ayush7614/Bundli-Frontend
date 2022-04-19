import { Grid, Toolbar } from "@mui/material";
import { Container } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";

import { Typography } from "@mui/material";
import { AppBar } from "@mui/material";
import { Box } from "@mui/system";

import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";

import React from "react";
import Logic from "./Logic";

import SearchIcon from "@mui/icons-material/Search";
import Media from "../../Utils/Media";
import useScrollTrigger from "@mui/material/useScrollTrigger";

const navs = ["Places to stay", "Experiences", "Online Experiences"];

const Navbar = () => {

  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 0 });
  const { currNav, handleNav } = Logic();
  const { textTrim, matches, phone } = Media();

  const navStyle = {

    "&:before": {
      
      content: '""',
      backgroundColor: "rgba(0,0,0,0.08)",
      width: 2,
      height: 30,
      position: "absolute",
      right: 0,
      bottom: 18,
      marginRight: "-1px",
    },
    p: 1,
    borderRadius: 50,
    cursor: "pointer",
    transition: "0.4s",
    position: "relative",
    fontSize: trigger && 0,
    paddingLeft: 2.5,
    display: trigger ? "none" : "inline-block",
    "&:hover": {
      
      backgroundColor: "rgba(0,0,0,0.08)",
    },
  };

  return (

    <AppBar
      elevation={trigger ? 4 : 0}
      position='fixed'
      sx={{
        backgroundColor: trigger ? "white" : "transparent",
        transition: "all 0.4s",
        height: trigger ? 75 : 160,
      }}
    >

      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
          paddingBlock: 2,
        }}
      >
        
        <Container
          maxWidth='1380px'
          sx={{
            maxWidth: "1380px",
            display: phone ? "none" : "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >

          <Typography
            variant='h5'
            sx={{
              fontWeight: 500,
              cursor: "pointer",
              color: trigger ? "#ff1493" : "white",
            }}
          >

            airbnb
          </Typography>
          <Box
            sx={{
              display: matches ? "none" : "flex",
              transform: trigger
                ? "translate(98.5px, -150%)"
                : "translate(98.5px)",
              opacity: trigger && 0,
              fontSize: trigger && 0,
              gap: 2.5,
              transition: "all 0.2s",
              "&>*": {
                paddingInline: 0.5,
                paddingBlock: 1,
                cursor: "pointer",
                borderBottom: trigger ? 0 : 3,
                borderColor: "rgba(0,0,0)",
                transition: "all 0.4s",
                "&:active": {
                  borderColor: "rgba(255,255,255,1)",
                },
              },
            }}
          >

            {navs.map((nav, i) => {
              return (
                <Typography
                  key={i}
                  onClick={() => handleNav(nav)}
                  sx={{
                    textAlign: "center",
                    borderBottom: 3,
                    borderColor:
                      currNav === nav ? "rgba(255,255,255)" : "rgba(0,0,0)",
                    "&:hover": {
                      borderBottom: 3,
                      borderColor:
                        currNav === nav
                          ? "rgba(255,255,255)"
                          : "rgba(255,255,255, 0.5)",
                      color:
                        currNav === nav
                          ? "rgba(255,255,255)"
                          : "rgba(255,255,255, 0.8)",
                    },
                  }}
                >

                  {nav}
                </Typography>
              );
            })}
          </Box>

          <Box sx={{
             display: "flex", alignItems: "center", gap: 1 }}>
            <Button
              sx={{

                borderRadius: 50,
                color: trigger ? "black" : "white",
                paddingInline: 1,
                fontSize: 13,
                "&:hover": {

                  backgroundColor: trigger
                    ? "rgba(0,0,0,0.15)"
                    : "rgba(255,255,255,0.15)",
                },
              }}
            >
              Become a host
            </Button>

            <IconButton
              sx={{

                color: trigger ? "black" : "white",
                "&:hover": {
                  backgroundColor: trigger
                    ? "rgba(0,0,0,0.15)"
                    : "rgba(255,255,255,0.15)",
                },
              }}

            >
              <LanguageIcon />
            </IconButton>

            <Box
              sx={{

                display: "flex",
                backgroundColor: "white",
                paddingInline: 0.5,
                paddingBlock: 0,
                borderRadius: 50,
                border: trigger ? 0.5 : 0,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <IconButton sx={{ color: "black" }}>
                <MenuIcon />
              </IconButton>

              <IconButton sx={{ color: "black" }}>
                <PersonIcon />
              </IconButton>

            </Box>
          </Box>

        </Container>
        <Box
          sx={{

            display: (phone && "none") || (matches && "flex") || "none",
            gap: 2.5,
            mt: 1,
            "&>*": {
              paddingInline: 0.5,
              paddingBlock: 1,
              cursor: "pointer",
              borderBottom: trigger ? 0 : 3,
              borderColor: trigger ? "white" : "rgba(0,0,0)",
              transform: trigger && "translate(-70%, -300%)",
              transition: "all 0.2s",
              "&:active": {
                borderColor: "rgba(255,255,255,1)",
              },
            },
          }}
        >
          {navs.map((nav, i) => {

            return (
              <Typography
                key={i}
                onClick={() => handleNav(nav)}
                sx={{

                  borderBottom: 3,
                  borderColor:
                    currNav === nav ? "rgba(255,255,255)" : "rgba(0,0,0)",
                  "&:hover": {
                    borderBottom: 3,
                    borderColor:
                      currNav === nav
                        ? "rgba(255,255,255)"
                        : "rgba(255,255,255, 0.5)",
                    color:
                      currNav === nav
                        ? "rgba(255,255,255)"
                        : "rgba(255,255,255, 0.8)",
                  },
                }}
              >
                {nav}
              </Typography>
            );
          })}
        </Box>

        <Grid
          container
          sx={{

            display: phone ? "none" : "flex",
            width: "100%",
            maxWidth: trigger ? 320 : 800,
            height: trigger ? 50 : 70,
            borderRadius: 50,
            backgroundColor: "white",
            color: "black",
            transform:
              (trigger && matches && "translate(-32%, -285%)") ||
              (trigger && "translateY(-140%)"),
            border: trigger ? 0.5 : 0,
            borderColor: "rgba(0, 0, 0, 0.2)",
            boxShadow: trigger ? 1 : 0,
            transition: "all 0.2s",
            "&>*:not(:last-child)": {
              opacity: trigger ? 0 : 1,
            },
          }}
        >
          <Grid item xs={3} sx={navStyle}>
            <Box sx={{ transform: "translateY(6.5px)", paddingInline: 0.8 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                Location
              </Typography>
              <Typography sx={{ fontSize: 15 }}>
                {textTrim ? "Where are you..." : "Where are you going?"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={2.5} sx={navStyle}>

            <Box sx={{ transform: "translateY(6.5px)", paddingInline: 0.8 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                Check in
              </Typography>
              <Typography sx={{ fontSize: 15 }}>Add dates</Typography>

            </Box>
          </Grid>

          <Grid item xs={2.5} sx={navStyle}>

            <Box sx={{ transform: "translateY(6.5px)", paddingInline: 0.8 }}>
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                Check out
              </Typography>
              <Typography sx={{ fontSize: 15 }}>Add dates</Typography>

            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{

              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 50,
              cursor: "pointer",
              transition: "all 0.2s",
              position: "relative",
              paddingLeft: 2.5,
              transition: "0.4s",
              display: trigger ? "none" : "flex",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.08)",
              },
            }}
          >
            <Box
              sx={{

                paddingInline: 0.8,
              }}
            >
              <Typography sx={{ fontWeight: "bold", fontSize: 13 }}>
                Guests
              </Typography>
              <Typography sx={{ fontSize: 15 }}>Add guests</Typography>
            </Box>
            <IconButton
              sx={{

                backgroundColor: "#ff1493",
                height: 50,
                width: 50,
                "&:hover": {
                   backgroundColor: "rgba(255, 56, 92, 0.9)" },
              }}
            >
              <SearchIcon sx={{

                 fontSize: 27, color: "white" }} />
            </IconButton>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{
              
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              p: 1,
              borderRadius: 50,
              cursor: "pointer",
              transition: "all 0.2s",
              position: "relative",
              paddingLeft: 2.5,
              transition: "0.4s",
              transform: "translateY(-3px)",
              display: trigger ? "flex" : "none",
              "&:hover": {
                backgroundColor: "rgba(0,0,0,0.08)",
              },
            }}
          >
            <Box
              sx={{
                paddingInline: 0.8,
              }}
            >
              <Typography sx={{ fontSize: 16 }}>Start your search</Typography>
            </Box>
            <IconButton
              sx={{
                backgroundColor: "#ff1493",
                height: 40,
                width: 40,
                "&:hover": { backgroundColor: "rgba(255, 56, 92, 0.9)" },
              }}
            >
              <SearchIcon sx={{ fontSize: 22, color: "white" }} />
            </IconButton>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: phone ? "flex" : "none",
            justifyContent: "center",
            backgroundColor: "white",
            color: "black",
            width: "100%",
            borderRadius: 50,
            alignItems: "center",
            gap: 1,
            paddingBlock: 1.5,
            cursor: "pointer",
            transition: "0.4s",
            "&:hover": {
              backgroundColor: "rgba(255,255,255,0.9)",
            },
          }}
        >
          <SearchIcon sx={{ color: "#ff1493" }} />
          <Typography sx={{ fontSize: 20 }}>Where are you going?</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";

function ShonarBangla() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  // Determine margin top based on screen width
  let marginTop;
  if (screenWidth < 600) {
    marginTop = "56px";
  } else if (screenWidth < 900) {
    marginTop = "62px";
  } else {
    marginTop = "100px";
  }

  const saareItems = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          marginTop: marginTop,
        }}
      >
        <Typography
          component="div"
          sx={{
            display: "block",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
          }}
        >
          <Typography
            component="div"
            sx={{ width: "100%", height: "auto", mb: 2 }}
          >
            <Typography
              component="div"
              sx={{
                width: "100%",
                height: "100%",
                position: "grid",
                placeItems: "center",
              }}
            >
              <img
                src="https://images7.alphacoders.com/107/thumbbig-1079694.jpg"
                alt="new item1"
                width="100%"
                height="100%"
                style={{ objectFit: "cover" }}
              />
            </Typography>
          </Typography>
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "auto",
                  overflow: "hidden",
                }}
              >
                <img
                  src="https://images7.alphacoders.com/107/thumbbig-1079694.jpg"
                  alt="new item1"
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0, 0, 0, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0,
                    transition: "opacity 0.5s ease",
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      color: "white",
                      p: 3,
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1.5rem",
                        fontWeight: 700,
                        mb: 2,
                      }}
                    >
                      Explore
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Montserrat, sans-serif",
                        fontSize: "1rem",
                        fontWeight: 400,
                      }}
                    >
                      Discover the best of Shonar Bangla
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "300px" }}
          />
          <Typography
            sx={{
              mt: 4,
              paddingLeft: "48px",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 100,
              fontSize: "3rem",
              textShadow:
                  "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
            }}
          >
            Shonar Bangla
          </Typography>
          {/* Cart component render*/}
          <Grid container sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {saareItems.map((item) => (
              <Grid
                xs={12}
                sm={6}
                md={3}
                sx={{ display: "grid", placeItems: "center" }}
              >
                <Cart />
              </Grid>
            ))}
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}

export default ShonarBangla;

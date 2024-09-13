import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useState } from "react";
import Cart from "./Cart";

function ShonarBangla() {
  const [saareItems, setISaareItems] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          position: "relative",
          margin: "auto",
          marginTop: "64px",
        }}
      >
        <Typography
          component="div"
          sx={{
            display: "block",
            marginTop: "100px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
          }}
        >
          <Typography
            component="div"
            sx={{ width: "100%", height: "1200px", mb: 2 }}
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

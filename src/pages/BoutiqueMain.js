import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import Cart from "./Cart";

const saareItems = [1, 2, 3, 4, 5, 6, 7, 8];

function BoutiqueMain() {
  // const [items, setItems] = useState([]);

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
            marginTop: "120px",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 300,
          }}
        >
          <Skeleton
            variant="rectangular"
            sx={{ width: "100%", height: "300px" }}
          />
          Put Image here
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

export default BoutiqueMain;

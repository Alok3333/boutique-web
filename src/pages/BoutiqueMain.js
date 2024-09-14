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
            New Collections
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

export default BoutiqueMain;

import { Box, Grid, Skeleton, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Cart from "./Cart";
import Loader from "./Loader";
// import styles from "../css/UnderlineText.module.css";

function SoulfulBenaras() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    //api data fetch and set loading to false after data is fetched
    setTimeout(() => {
      // Simulate an API call and Set actual fetched data here
      setItems([1, 2, 3, 4, 5, 6, 7, 8]);
      setLoading(false);
    }, 10000);

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
          <Grid container>
            <Grid item xs={12} sm={12} md={12}>
              <Typography component="div" sx={{ width: "100%", mb: 2 }}>
                <Typography
                  component="div"
                  sx={{
                    width: "100%",
                    // height: "100%",
                    position: "grid",
                    placeItems: "center",
                  }}
                >
                  <img
                    src="https://wallpapercave.com/wp/wp7811042.jpg"
                    alt="new item1"
                    width="100%"
                    // height="100%"
                    style={{ objectFit: "cover" }}
                  />
                </Typography>
              </Typography>
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
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 100,
                fontSize: "3rem",
                textShadow:
                  "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
              }}
              // className={styles.unText}
            >
              Soulful Banaras
            </Typography>
          </Typography>
          {/* Cart component render*/}
          <Grid container sx={{ paddingLeft: "20px", paddingRight: "20px" }}>
            {loading ? (
              <Loader />
            ) : (
              items.map((item, i) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={3}
                  sx={{ display: "grid", placeItems: "center" }}
                  key={i}
                >
                  <Cart />
                </Grid>
              ))
            )}
          </Grid>
        </Typography>
      </Box>
    </Box>
  );
}

export default SoulfulBenaras;
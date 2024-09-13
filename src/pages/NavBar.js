import React from "react";
import {
  Button,
  Box,
  Typography,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import navStyles from "../css/NavBar.module.css";

const drawerWidth = 340;

function NavBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Handle click for Buy button
  const handleClickBuyButton = () => {
    alert("Thank you for buying product");
  };

  // Handle for logo click
  const handleImageClickLogo = async () => {
    navigate("/");
  };

  // Handle click for menu item
  const handleClickItem1 = async () => {
    navigate("/soulfulbenaras");
  };

  const handleClickItem2 = async () => {
    navigate("/deccanheritage");
  };

  const handleClickItem3 = async () => {
    navigate("/shonarbangla");
  };

  const handleClickItem4 = async () => {
    navigate("/rangilorajasthan");
  };

  const handleClickItem5 = async () => {
    navigate("/kashmirkali");
  };

  const handleClickItem6 = async () => {
    navigate("/orissaodyssey");
  };

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const onButtonClicklogin = async () => {
    navigate("/Login");
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography sx={{ my: 2, px: 2 }}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "800",
            color: "#FFC7C7",
          }}
        >
          TRISHIKA
        </Typography>
        <Typography
          variant="h7"
          sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: "300" }}
        >
          ELEVATE YOUR STYLE
        </Typography>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding component={RouterLink} to="/Login">
          <ListItemButton
            sx={{
              textAlign: "center",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 300,
              color: "#000",
            }}
          >
            <ListItemText primary="Login" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#FFC7C7",
          color: "#000",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Grid
            container
            spacing={0}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item sm={2} md={2}>
              {/* Logo */}
              <Typography
                variant="h6"
                component="div"
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "flex" },
                  justifyContent: "start",
                  alignItems: "center",
                }}
                onClick={handleImageClickLogo}
              >
                <img
                  src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-12-5832-trishika_logo-Photo.png"
                  alt="trishika_logo"
                  width="100"
                  height="100"
                  style={{
                    objectFit: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    backgroundColor: "#F6F6F6",
                  }}
                />
                {/* <Typography
                  variant="h5"
                  sx={{ fontWeight: "700", color: "#F6F6F6" }}
                >
                  TRISHIKA
                </Typography>
                <Typography
                  sx={{ fontFamily: "Montserrat, sans-serif", fontWeight: 300 }}
                >
                  <sub>ELEVATE YOUR STYLE</sub>
                </Typography> */}
              </Typography>
            </Grid>

            {/* menu title button */}
            <Grid
              item
              sm={8}
              md={8}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem1}
                >
                  Soulful Benaras
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem2}
                >
                  Deccan Heritage
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem3}
                >
                  Shonar Bangla
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem4}
                >
                  Rangilo Rajasthan
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem5}
                >
                  Kashmir ki Kali
                </Button>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                    mx: 1,
                  }}
                  className={navStyles.unText}
                  onClick={handleClickItem6}
                >
                  Orissa odyssey
                </Button>
              </Box>
            </Grid>

            {/* button for login and buy */}
            <Grid
              item
              sm={2}
              md={2}
              sx={{ display: "flex", justifyContent: "end" }}
            >
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                <Button
                  sx={{
                    color: "#000",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 300,
                  }}
                  onClick={onButtonClicklogin}
                >
                  Login
                </Button>

                <Button
                  variant="contained"
                  color="secondary"
                  style={{
                    padding: "5px 10px",
                    fontSize: "12px",
                    height: "30px",
                    width: "150px",
                  }}
                  onClick={handleClickBuyButton}
                >
                  Buy
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;

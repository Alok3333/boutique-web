import React, { useState } from "react";
import {
  Button,
  Box,
  Typography,
  Container,
  AppBar,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  TextField,
  Stack,
} from "@mui/material";
import Grid from "@mui/material/Grid";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import CssBaseline from "@mui/material/CssBaseline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link, Link as RouterLink } from "react-router-dom";
import styles from "../virtuallabcss/NavBar.module.css";
import { useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GoogleIcon from "@mui/icons-material/Google";

// Login Component
export const LoginPage = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#1343c7",
        position: "relative",
        overflow: "hidden",
        marginX: "auto",
        height: "100vh",
      }}
    >
      {/* Background div behind the content */}
      <div
        style={{
          position: "absolute",
          maxWidth: "850px",
          width: "100%",
          height: "200vh",
          backgroundColor: "#9fadf0",
          right: "-170px",
          top: "-150px",
          rotate: "36deg",
        }}
        className="backgroundBox"
      />

      {/* Main content */}
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { sm: "30px", md: "150px" },
          marginX: "auto",
          color: "white",
          padding: "30px",
          backgroundColor: "transparent",
          width: { sm: "100%", md: "90%" },
        }}
      >
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              padding: 4,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: "background.paper",
              zIndex: 1,
            }}
          >
            <Typography variant="h4" align="center" gutterBottom color="black">
              Login
            </Typography>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ padding: 1.5 }}
                  >
                    Login
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    align="center"
                    color="black"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    <small>
                      Forgot{" "}
                      <Link to="#" className={styles.signUpText}>
                        Username
                      </Link>
                      /
                      <Link to="#" className={styles.signUpText}>
                        Password?
                      </Link>
                    </small>
                    <br />
                    <small>
                      Don't have an account?{" "}
                      <Link to="/signup" className={styles.signUpText}>
                        Sign up now
                      </Link>
                    </small>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    align="center"
                    color="black"
                    sx={{ mt: 2, mb: 1 }}
                  >
                    Or login with
                  </Typography>
                </Grid>
                {/* Login with Google */}
                <Grid item xs={4} />
                <Grid
                  item
                  xs={2}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <a href="#" sx={{ mb: 1 }}>
                    <GoogleIcon />
                  </a>
                </Grid>
                {/* Login with Facebook */}
                <Grid item xs={2}>
                  <a href="#" sx={{ mb: 1 }}>
                    <FacebookIcon />
                  </a>
                </Grid>
                <Grid item xs={4} />
              </Grid>
            </form>
          </Box>
        </Box>
        <Box sx={{ width: "45%", zIndex: 1, textAlign: { md: "right" } }}>
          <Typography variant="h2" fontWeight="bold">
            Access personalized learning and mentorship tools.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

// Contact Us Component
export const ContactPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(firstName, lastName, email, phone);
  }
  return (
    <Container maxWidth="xl" sx={{ my: 4, p: 4 }}>
      <Grid container spacing={0}>
        <Grid xs={12} sm={12} md={6} xl={6} sx={{ p: 4 }}>
          <Typography
            variant="h3"
            sx={{
              my: 4,
              fontWeight: 700,
              color: "#444",
              textShadow:
                "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
            }}
          >
            Contact Us
          </Typography>
          <Typography sx={{ my: 4, color: "#aaa" }}>
            Need to get in touch with us? Either fill out the form with your
            inquiry or find the department email you'd like to contact below.
          </Typography>
        </Grid>
        <Grid
          xs={12}
          sm={12}
          md={6}
          xl={6}
          sx={{ backgroundColor: "none", color: "#aaa" }}
        >
          <>
            <form
              onSubmit={handleSubmit}
              action={<Link to="/login" />}
              style={{ marginTop: "8px", marginBottom: "8px" }}
            >
              <Stack spacing={2} direction="row" sx={{ marginBottom: 4 }}>
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  fullWidth
                  required
                />
                <TextField
                  type="text"
                  variant="outlined"
                  color="secondary"
                  label="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  fullWidth
                  required
                />
              </Stack>
              <TextField
                type="email"
                variant="outlined"
                color="secondary"
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                fullWidth
                required
                sx={{ mb: 4 }}
              />
              <TextField
                type="tel"
                variant="outlined"
                color="secondary"
                label="Phone"
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                required
                fullWidth
                sx={{ mb: 4 }}
              />
              <Button variant="outlined" color="secondary" type="submit">
                Submit
              </Button>
            </form>
          </>
        </Grid>
      </Grid>
    </Container>
  );
};

const drawerWidth = 340;

function NavBar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // State for subscribe button
  const [subscribeVal, setSubscribeVal] = useState();

  // Handle for subscript button
  const handleSubscribe = () => {
    if (subscribeVal) {
      alert("Thank you for subscribe!");
    } else {
      alert("Please Enter Your Email");
    }
  };

  // Handle click for Buy button
  const handleClickBuyButton = () => {
    alert("Thank you for buying product");
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
        <Typography variant="h5" sx={{ fontWeight: "700", color: "brown" }}>
          TRISHIKA
        </Typography>
        <Typography variant="h7">ELEVATE YOUR STYLE</Typography>
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding component={RouterLink} to="/Login">
          <ListItemButton sx={{ textAlign: "center" }}>
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
        <Toolbar sx={{ minHeight: "100px !important" }}>
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
              height: "100px",
            }}
          >
            <Grid item xs={12} sm={12} md={6} xl={2}>
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
              xl={8}
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
                  className={styles.unText}
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
                  className={styles.unText}
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
                  className={styles.unText}
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
                  className={styles.unText}
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
                  className={styles.unText}
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
                  className={styles.unText}
                >
                  Orissa odyssey
                </Button>
              </Box>
            </Grid>

            {/* button for login and buy */}
            <Grid item xl={2} sx={{ display: "flex", justifyContent: "end" }}>
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
      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            maxWidth: "1500px",
            margin: "auto",
            marginTop: "64px",
          }}
        >
          <Container>
            <Box
              component="main"
              sx={{ p: 2, backgroundColor: "#fff", color: "#0c0c0c" }}
            >
              <Box>
                <img
                  src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-10-5245-about-img.jpg"
                  alt="about_img"
                  className={styles.aboutImage}
                />
              </Box>
            </Box>
          </Container>

          {/* Contact page */}
          <ContactPage />
        </Box>

        {/* Footer Section*/}
        <Box sx={{ backgroundColor: "#0c0c0c", color: "#fff", p: 2 }}>
          <Container maxWidth="xl" sx={{ backgroundColor: "none", mt: 2 }}>
            {/* Grid for footer logo and social links */}
            <Grid
              container
              spacing={0}
              sx={{ backgroundColor: "none", color: "#cdcdcd" }}
            >
              <Grid item xs={12} sm={12} md={6} sx={{ p: 2 }}>
                <img
                  src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-11-2048-FullLogo_Transparent_NoBuffer.png"
                  alt="footer_ct_logo"
                  width="150"
                  height="60"
                  style={{
                    objectFit: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  p: 2,
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <Typography sx={{ color: "#1877F2" }}>
                  <FacebookIcon />
                </Typography>

                <Typography sx={{ color: "#657786" }}>
                  <XIcon />
                </Typography>

                <Typography sx={{ color: "#0072b1" }}>
                  <LinkedInIcon />
                </Typography>

                <Typography sx={{ color: "#d62976" }}>
                  <InstagramIcon />
                </Typography>

                <Typography sx={{ color: "#FF0000" }}>
                  <YouTubeIcon />
                </Typography>
              </Grid>
            </Grid>

            {/* Grid for footer info */}
            <Grid
              container
              spacing={0}
              sx={{ backgroundColor: "#0c0c0c", color: "#cdcdcd" }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "start",
                  justifyContent: "start",
                  alignItems: "start",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Useful Link
                <Typography sx={{ mt: 1 }}>
                  <Link to="/" className={styles.atag}>
                    Home
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/" className={styles.atag}>
                    Contact
                  </Link>
                </Typography>
                <Typography>
                  <Link to="/login" className={styles.atag}>
                    Login
                  </Link>
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Offices
                <Typography sx={{ mt: 1, textTransform: "none" }}>
                  www.Campus
                  <Typography component="span" sx={{ color: "red" }}>
                    Technology
                  </Typography>
                  .com
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "grid",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Information
                <Typography sx={{ mt: 0, textTransform: "none" }}>
                  Readable content of a page when looking at its layoutreadable
                  content of a page when looking at its layout.
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                xl={3}
                sx={{
                  p: 2,
                  display: "block",
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Newsletter
                <Typography
                  component="div"
                  sx={{ mt: 1, textTransform: "none" }}
                >
                  <TextField
                    size="small"
                    fullWidth
                    // label="Email"
                    placeholder="Email"
                    id="fullWidth"
                    sx={{ backgroundColor: "#fff", borderRadius: "4px" }}
                    value={subscribeVal}
                    onChange={(e) => setSubscribeVal(e.target.value)}
                  />
                  <Button
                    variant="contained"
                    sx={{ my: 1 }}
                    onClick={handleSubscribe}
                  >
                    Subscribe
                  </Button>
                </Typography>
              </Grid>
            </Grid>

            {/* CopyRight text */}
            {/* <Typography
              component="div"
              sx={{
                color: "#cdcdcd",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              &copy; www.campustechnology.com
            </Typography> */}
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

NavBar.propTypes = {
  window: PropTypes.func,
};

export default NavBar;

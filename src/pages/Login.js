import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import loginCss from "../css/Login.module.css";

const Login = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#FFC7C7",
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
          backgroundColor: "#FFE2E2",
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
            width: "80%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "100%", zIndex: 1, textAlign: { md: "left" } }}>
            {/* <img
                src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-12-5832-trishika_logo-Photo.png"
                alt="trishika_logo"
                width="250"
                height="250"
                style={{borderRadius: "50%", backgroundColor: "#F6F6F6"}}
              /> */}
            {/* <Typography variant="h2" fontWeight="bold">
                Access personalized learning and mentorship tools.
              </Typography> */}
            <Box className={loginCss.container}>
              <img
                src="https://jadavpuruniversity.s3-ap-south-1.amazonaws.com/9-2024-12-5832-trishika_logo-Photo.png"
                alt="Omar"
              />
            </Box>
          </Box>

          <Box
            sx={{
              padding: 4,
              boxShadow: 3,
              borderRadius: 2,
              bgcolor: "#F6F6F6",
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
                      <Link to="#" className={loginCss.signUpText}>
                        Username
                      </Link>
                      /
                      <Link to="#" className={loginCss.signUpText}>
                        Password?
                      </Link>
                    </small>
                    <br />
                    <small>
                      Don't have an account?{" "}
                      <Link to="/signup" className={loginCss.signUpText}>
                        Sign up now
                      </Link>
                    </small>
                  </Typography>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Login;

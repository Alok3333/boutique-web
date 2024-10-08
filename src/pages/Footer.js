import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import footerCss from "../css/Footer.module.css";

function Footer() {
  const navigate = useNavigate();

  // Handle for contact button
  const handleContact = async () => {
    navigate("/contact");
  };
  return (
    <div>
      {/* Footer Section*/}
      <Box sx={{ backgroundColor: "#F6F6F6", color: "#000", p: 2 }}>
        <Container maxWidth="xl" sx={{ backgroundColor: "none", mt: 2 }}>
          {/* Grid for footer info */}
          <Grid container>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              xl={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                justifyContent: "start",
                alignItems: "start",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              What's new
              <Typography sx={{ mt: 2, lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  New Sari 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Soulful Benaras 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Deccan Heritage 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Shonar Bangla 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Rangilo Rajasthan 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Kashmir ki Kali 2024
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Orissa odyssey 2024
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              xl={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                justifyContent: "start",
                alignItems: "start",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              World of trishika
              <Typography sx={{ mt: 2, lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  History
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Collaborations
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  The trishika art foundation
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Social Initiatives
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Art Of Retail
                </Link>
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              xl={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                justifyContent: "start",
                alignItems: "start",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              Customer care
              <Typography sx={{ mt: 2, lineHeight: "2" }}>
                <Link
                  to="/contact"
                  onClick={handleContact}
                  className={footerCss.atag}
                >
                  Contact
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="/" className={footerCss.atag}>
                  Stores
                </Link>
              </Typography>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              xl={3}
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                textAlign: "start",
                justifyContent: "start",
                alignItems: "start",
                textTransform: "uppercase",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
                fontSize: "12px",
              }}
            >
              Social
              <Typography sx={{ mt: 2, lineHeight: "2" }}>
                <Link to="https://www.youtube.com/@trishika-style" className={footerCss.atag}>
                  YouTube
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="https://www.instagram.com/style_with_trishika?utm_source=qr&igsh=MXB1NTZzaDhuaGdsYg%3D%3D" className={footerCss.atag}>
                  Instagram
                </Link>
              </Typography>
              <Typography sx={{ lineHeight: "2" }}>
                <Link to="https://www.facebook.com/profile.php?id=61565641401554&mibextid=qi2Omg&rdid=M4lICVmjbchgxoKP&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FExS7w5YUPuDei9S8%2F%3Fmibextid%3Dqi2Omg" className={footerCss.atag}>
                  Facebook
                </Link>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Footer;

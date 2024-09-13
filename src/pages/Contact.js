import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
                color: "#444",
                textShadow:
                  "1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc, 1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc, 3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc, 5px 6px 1px #eee, 7px 6px 1px #ccc;",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 300,
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
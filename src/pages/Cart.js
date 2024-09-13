import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
// import cartCss from "../css/Cart.module.css";
import img1 from "../assets/Saree (5).jpg";

function Cart() {
  return (
    <Card sx={{ maxWidth: 400, mx: 2, my: 5 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="540"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ₹2000
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Women's Trendy Kanjivaram Soft Lichi Silk Saree With Blouse Piece
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="secondary">
          Share
        </Button>
        <Button size="small">Get now</Button>
      </CardActions>
    </Card>
  );
}

export default Cart;


import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import img1 from "../assets/Saree (5).jpg";
import cartCss from "../css/Cart.module.css";

function Cart({ image, price, title }) {
  return (
    <Card sx={{ maxWidth: 400, mx: 2, my: 5 }} className={cartCss.cartWrapper}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="540"
        image={img1}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          ₹2000
          {/* {price} */}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Women's Trendy Kanjivaram Soft Lichi Silk Saree With Blouse Piece
          {/* {title} */}
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

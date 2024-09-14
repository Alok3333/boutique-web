import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  Button,
  Chip,
  Divider,
  Grid,
} from "@mui/material";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

const ProductDetail = ({ productId }) => {
  const [quantity, setQuantity] = useState(1);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
  const [product, setProduct] = useState(null);

  // Sample product data
  const productDetail = [
    {
      id: "1",
      images: [
        {
          original:
            "https://images.unsplash.com/photo-1593642532973-d31b6557f9e4?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1593642532973-d31b6557f9e4?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1506748686214-e9df14f3d6d5?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1506748686214-e9df14f3d6d5?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1546967195-22f2a5e81d44?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1546967195-22f2a5e81d44?w=100",
        },
      ],
      title: "VINTAGE LEATHER JACKET",
      reviews: 85,
      availability: true,
      brand: "Heritage",
      category: "Apparel",
      sku: "LEA-001",
      price: 299,
      previousPrice: 399,
      description:
        "A stylish vintage leather jacket crafted from premium quality leather. Perfect for adding a touch of classic elegance to any outfit.",
      size: ["S", "M", "L", "XL"],
      color: ["brown", "black"],
    },
    // ... more product items
  ];

  const productDetailItems = [
    {
      id: "1",
      images: [
        {
          original: "https://wallpapercave.com/wp/wp7562971.jpg",
          thumbnail: "https://wallpapercave.com/wp/wp7562971.jpg",
        },
        {
          original:
            "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          thumbnail:
            "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          original:
            "https://w0.peakpx.com/wallpaper/1/1002/HD-wallpaper-rashi-khanna-actress-indian-saree-thumbnail.jpg",
          thumbnail:
            "https://w0.peakpx.com/wallpaper/1/1002/HD-wallpaper-rashi-khanna-actress-indian-saree-thumbnail.jpg",
        },
        {
          original:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnodpy1SZqEY9gDX2ZroTXO_ftpMOSeJTBLbHUiQd6Xp9QyYSdZAvVn3nAZKlPVJxwNTGJUTli8M_gMVlVQ3qTqR9abmIpBryQoUivpMoJPLOYRaFOHr7v3ZAr7naNN_l8Hru3GbsCCtTb/s640-rw/Beautiful-Hot-Indian-Models-in-Saree-High-Resolution-Wallpapers-16.jpg",
          thumbnail:
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnodpy1SZqEY9gDX2ZroTXO_ftpMOSeJTBLbHUiQd6Xp9QyYSdZAvVn3nAZKlPVJxwNTGJUTli8M_gMVlVQ3qTqR9abmIpBryQoUivpMoJPLOYRaFOHr7v3ZAr7naNN_l8Hru3GbsCCtTb/s640-rw/Beautiful-Hot-Indian-Models-in-Saree-High-Resolution-Wallpapers-16.jpg",
        },
        {
          original:
            "https://i.pinimg.com/originals/37/85/00/37850030d62a70be7bea8aca48b1d044.jpg",
          thumbnail:
            "https://i.pinimg.com/originals/37/85/00/37850030d62a70be7bea8aca48b1d044.jpg",
        },
        {
          original:
            "https://cdn.sareeka.com/image/cache/data2018/banarasi-silk-red-trendy-saree-88740-1000x1375.jpg",
          thumbnail:
            "https://cdn.sareeka.com/image/cache/data2018/banarasi-silk-red-trendy-saree-88740-1000x1375.jpg",
        },
      ],
      title: "ELEGANT SILK DRESS SAREE",
      reviews: 150,
      availability: true,
      brand: "Apex",
      category: "Sofa",
      sku: "BE45VGTRK",
      price: 450,
      previousPrice: 599,
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
      size: ["XS", "S", "M", "L", "XL"],
      color: ["gray", "violet", "red"],
    },
    {
      id: "2",
      images: [
        {
          original:
            "https://images.unsplash.com/photo-1517520287160-4b7a69c0d2f3?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1517520287160-4b7a69c0d2f3?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1600987649555-e0e85a1f9c6f?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1600987649555-e0e85a1f9c6f?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1542023568-589e39378a93?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1542023568-589e39378a93?w=100",
        },
      ],
      title: "PREMIUM OFFICE CHAIR",
      reviews: 60,
      availability: true,
      brand: "ComfortPlus",
      category: "Furniture",
      sku: "CHA-202",
      price: 149,
      previousPrice: 199,
      description:
        "Ergonomic office chair designed for comfort and style. Adjustable height and reclining features make it ideal for long hours of work.",
      size: ["Standard"],
      color: ["black", "grey"],
    },
    {
      id: "3",
      images: [
        {
          original:
            "https://images.unsplash.com/photo-1587602825731-451dfe68961a?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1587602825731-451dfe68961a?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1591825360787-b67b0d3c4a41?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1591825360787-b67b0d3c4a41?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1556740749-87c7a4d6c8b8?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1556740749-87c7a4d6c8b8?w=100",
        },
      ],
      title: "ALL-WEATHER OUTDOOR GRILL",
      reviews: 140,
      availability: true,
      brand: "GrillMaster",
      category: "Outdoor",
      sku: "GRL-789",
      price: 399,
      previousPrice: 499,
      description:
        "Durable and high-performance outdoor grill with multiple burners. Ideal for barbecues and outdoor gatherings.",
      size: ["Large"],
      color: ["silver", "black"],
    },
    {
      id: "4",
      images: [
        {
          original:
            "https://images.unsplash.com/photo-1587676617347-4f60f287c744?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1587676617347-4f60f287c744?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1599465268438-d3f69704a5b2?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1599465268438-d3f69704a5b2?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1556740738-c1a0d2170b91?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1556740738-c1a0d2170b91?w=100",
        },
      ],
      title: "SMARTPHONE WITH 5G",
      reviews: 320,
      availability: true,
      brand: "Techno",
      category: "Electronics",
      sku: "PHN-456",
      price: 799,
      previousPrice: 999,
      description:
        "Latest smartphone with 5G capabilities and a stunning display. Includes advanced camera features and a powerful processor.",
      size: ["128GB", "256GB"],
      color: ["black", "blue", "silver"],
    },
    {
      id: "5",
      images: [
        {
          original:
            "https://images.unsplash.com/photo-1555685816-1e8e3cdd5b9d?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1555685816-1e8e3cdd5b9d?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1516312891382-0d0026e645b1?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1516312891382-0d0026e645b1?w=100",
        },
        {
          original:
            "https://images.unsplash.com/photo-1579826122161-f5045801bfb6?w=600",
          thumbnail:
            "https://images.unsplash.com/photo-1579826122161-f5045801bfb6?w=100",
        },
      ],
      title: "ELEGANT MINK THROW BLANKET",
      reviews: 95,
      availability: true,
      brand: "ComfortLux",
      category: "Home",
      sku: "BLK-101",
      price: 129,
      previousPrice: 159,
      description:
        "Luxurious mink throw blanket designed for comfort and warmth. Ideal for cozying up on chilly evenings.",
      size: ["Standard"],
      color: ["cream", "grey", "brown"],
    },
  ];

  useEffect(() => {
    const handleScreenSize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleScreenSize);

    return () => {
      window.removeEventListener("resize", handleScreenSize);
    };
  }, []);

  useEffect(() => {
    const selectedProduct = productDetailItems.find(
      (item) => item.id === productId
    );
    setProduct(selectedProduct);
  }, [productId]);

  let marginTop;
  if (screenSize < 600) {
    marginTop = "56px";
  } else if (screenSize < 900) {
    marginTop = "64px";
  } else {
    marginTop = "100px";
  }

  const handleQuantityChange = (delta) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
  };

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: 3,
        marginTop: marginTop,
        mb: "50px",
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <ReactImageGallery
              items={product.images}
              showFullscreenButton={false}
              showPlayButton={false}
              showBullets={true}
              showNav={true}
              thumbnailPosition="bottom"
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: 3 }}>
            <Typography variant="h4" component="div" gutterBottom>
              {product.title}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Rater
                style={{ fontSize: "20px" }}
                total={5}
                interactive={false}
                rating={3.5} // You might want to set this dynamically based on actual product data
              />
              <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
                ({product.reviews})
              </Typography>
            </Box>
            <Typography variant="h6" color="primary" gutterBottom>
              ${product.price}{" "}
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                ${product.previousPrice}
              </span>
            </Typography>
            <Typography variant="body1" paragraph>
              {product.description}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body2" gutterBottom>
              Availability:{" "}
              <Chip
                label={product.availability ? "In Stock" : "Out of Stock"}
                color={product.availability ? "success" : "error"}
              />
            </Typography>
            <Typography variant="body2" gutterBottom>
              Brand: {product.brand}
            </Typography>
            <Typography variant="body2" gutterBottom>
              Category: {product.category}
            </Typography>
            <Typography variant="body2" gutterBottom>
              SKU: {product.sku}
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
              <Typography variant="body2">Size:</Typography>
              {product.size.map((size, index) => (
                <Button key={index} variant="outlined">
                  {size}
                </Button>
              ))}
            </Box>
            <Box sx={{ display: "flex", gap: 1, my: 2 }}>
              <Typography variant="body2">Color:</Typography>
              {product.color.map((color, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 24,
                    height: 24,
                    borderRadius: "50%",
                    backgroundColor: color,
                    border: "1px solid #ccc",
                  }}
                />
              ))}
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
              <Button onClick={() => handleQuantityChange(-1)}>-</Button>
              <Typography sx={{ mx: 2 }}>{quantity}</Typography>
              <Button onClick={() => handleQuantityChange(1)}>+</Button>
            </Box>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<i className="fas fa-shopping-bag"></i>}
              >
                Add to Cart
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                startIcon={<i className="fas fa-heart"></i>}
              >
                Wishlist
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Typography,
//   Card,
//   Button,
//   Chip,
//   Divider,
//   Grid,
// } from "@mui/material";
// import ReactImageGallery from "react-image-gallery";
// import "react-image-gallery/styles/css/image-gallery.css";
// import Rater from "react-rater";
// import "react-rater/lib/react-rater.css";

// const ProductDetail = () => {
//   const [quantity, setQuantity] = useState(1);
//   const [screenSize, setScreenSize] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleScreenSize = () => {
//       setScreenSize(window.innerWidth);
//     };

//     window.addEventListener("resize", handleScreenSize);

//     return () => {
//       window.removeEventListener("resize", handleScreenSize);
//     };
//   }, []);

//   let marginTop;
//   if (screenSize < 600) {
//     marginTop = "56px";
//   } else if (screenSize < 900) {
//     marginTop = "64px";
//   } else {
//     marginTop = "100px";
//   }

//   const handleQuantityChange = (delta) => {
//     setQuantity((prevQuantity) => Math.max(1, prevQuantity + delta));
//   };

//   const productDetailItem = {
//     images: [
//       {
//         original: "https://wallpapercave.com/wp/wp7562971.jpg",
//         thumbnail: "https://wallpapercave.com/wp/wp7562971.jpg",
//       },
//       {
//         original:
//           "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//         thumbnail:
//           "https://images.unsplash.com/photo-1692992193981-d3d92fabd9cb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       },
//       {
//         original:
//           "https://w0.peakpx.com/wallpaper/1/1002/HD-wallpaper-rashi-khanna-actress-indian-saree-thumbnail.jpg",
//         thumbnail:
//           "https://w0.peakpx.com/wallpaper/1/1002/HD-wallpaper-rashi-khanna-actress-indian-saree-thumbnail.jpg",
//       },
//       {
//         original:
//           "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnodpy1SZqEY9gDX2ZroTXO_ftpMOSeJTBLbHUiQd6Xp9QyYSdZAvVn3nAZKlPVJxwNTGJUTli8M_gMVlVQ3qTqR9abmIpBryQoUivpMoJPLOYRaFOHr7v3ZAr7naNN_l8Hru3GbsCCtTb/s640-rw/Beautiful-Hot-Indian-Models-in-Saree-High-Resolution-Wallpapers-16.jpg",
//         thumbnail:
//           "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnodpy1SZqEY9gDX2ZroTXO_ftpMOSeJTBLbHUiQd6Xp9QyYSdZAvVn3nAZKlPVJxwNTGJUTli8M_gMVlVQ3qTqR9abmIpBryQoUivpMoJPLOYRaFOHr7v3ZAr7naNN_l8Hru3GbsCCtTb/s640-rw/Beautiful-Hot-Indian-Models-in-Saree-High-Resolution-Wallpapers-16.jpg",
//       },
//       {
//         original:
//           "https://i.pinimg.com/originals/37/85/00/37850030d62a70be7bea8aca48b1d044.jpg",
//         thumbnail:
//           "https://i.pinimg.com/originals/37/85/00/37850030d62a70be7bea8aca48b1d044.jpg",
//       },
//       {
//         original: "https://cdn.sareeka.com/image/cache/data2018/banarasi-silk-red-trendy-saree-88740-1000x1375.jpg",
//         thumbnail: "https://cdn.sareeka.com/image/cache/data2018/banarasi-silk-red-trendy-saree-88740-1000x1375.jpg",
//       },
//     ],
//     title: "ELEGANT SILK DRESS SAREE",
//     reviews: 150,
//     availability: true,
//     brand: "Apex",
//     category: "Sofa",
//     sku: "BE45VGTRK",
//     price: 450,
//     previousPrice: 599,
//     description:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem exercitationem voluptate sint eius ea assumenda provident eos repellendus qui neque! Velit ratione illo maiores voluptates commodi eaque illum, laudantium non!",
//     size: ["XS", "S", "M", "L", "XL"],
//     color: ["gray", "violet", "red"],
//   };

//   return (
//     <Box
//       sx={{
//         flexGrow: 1,
//         padding: 3,
//         marginTop: marginTop,
//         mb: "50px",
//       }}
//     >
//       <Grid container spacing={3}>
//         <Grid item xs={12} md={6}>
//           <Card>
//             <ReactImageGallery
//               items={productDetailItem.images}
//               showFullscreenButton={false}
//               showPlayButton={false}
//               showBullets={true}
//               showNav={true}
//               thumbnailPosition="bottom"
//             />
//           </Card>
//         </Grid>
//         <Grid item xs={12} md={6}>
//           <Box sx={{ padding: 3 }}>
//             <Typography variant="h4" component="div" gutterBottom>
//               {productDetailItem.title}
//             </Typography>
//             <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
//               <Rater
//                 style={{ fontSize: "20px" }}
//                 total={5}
//                 interactive={false}
//                 rating={3.5}
//               />
//               <Typography variant="body2" color="textSecondary" sx={{ ml: 2 }}>
//                 ({productDetailItem.reviews})
//               </Typography>
//             </Box>
//             <Typography variant="h6" color="primary" gutterBottom>
//               ${productDetailItem.price}{" "}
//               <span style={{ textDecoration: "line-through", color: "gray" }}>
//                 ${productDetailItem.previousPrice}
//               </span>
//             </Typography>
//             <Typography variant="body1" paragraph>
//               {productDetailItem.description}
//             </Typography>
//             <Divider sx={{ my: 2 }} />
//             <Typography variant="body2" gutterBottom>
//               Availability:{" "}
//               <Chip
//                 label={
//                   productDetailItem.availability ? "In Stock" : "Out of Stock"
//                 }
//                 color={productDetailItem.availability ? "success" : "error"}
//               />
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               Brand: {productDetailItem.brand}
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               Category: {productDetailItem.category}
//             </Typography>
//             <Typography variant="body2" gutterBottom>
//               SKU: {productDetailItem.sku}
//             </Typography>
//             <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, my: 2 }}>
//               <Typography variant="body2">Size:</Typography>
//               {productDetailItem.size.map((size, index) => (
//                 <Button key={index} variant="outlined">
//                   {size}
//                 </Button>
//               ))}
//             </Box>
//             <Box sx={{ display: "flex", gap: 1, my: 2 }}>
//               <Typography variant="body2">Color:</Typography>
//               {productDetailItem.color.map((color, index) => (
//                 <Box
//                   key={index}
//                   sx={{
//                     width: 24,
//                     height: 24,
//                     borderRadius: "50%",
//                     backgroundColor: color,
//                     border: "1px solid #ccc",
//                   }}
//                 />
//               ))}
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "center", my: 2 }}>
//               <Button onClick={() => handleQuantityChange(-1)}>-</Button>
//               <Typography sx={{ mx: 2 }}>{quantity}</Typography>
//               <Button onClick={() => handleQuantityChange(1)}>+</Button>
//             </Box>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 startIcon={<i className="fas fa-shopping-bag"></i>}
//               >
//                 Add to Cart
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="secondary"
//                 startIcon={<i className="fas fa-heart"></i>}
//               >
//                 Wishlist
//               </Button>
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// };

// export default ProductDetail;

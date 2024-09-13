import React, { useState } from "react";
import { Box, Container, Grid, Divider, Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import SuggestedProducts from "./Components/ComponentProductCard";
import ProductTabs from "./Components/ComponentProductTabs";
import { AddToCart } from "../../Redux/cartSlice";
import { RootState } from "../../Redux/Store";
import { toast } from "react-toastify";
import ProductThumbnails from "./Components/ComponentThumbnail";
import ProductInfo from "./Components/ComponentProductInfo";
import ProductDetailsActions from "./Components/ComponentDetailedAction";
import MyButtons from "./Components/ComponentButton";

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(1);

  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  if (!location.state || !location.state.product) {
    navigate("/");
    return null;
  }

  const { product } = location.state as {
    product: {
      id: string;
      image: string;
      name: string;
      rating: number;
      originalPrice?: number;
      price: number;
      discount: string;
    };
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () =>
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Select a size", {
        theme: "dark",
        autoClose: 1000,
      });
      return;
    }

    const selectedColor = "black";

    const isItemInCart = cartItems.find(
      (item) => item.id === product.id && item.size === selectedSize
    );

    if (isItemInCart) {
      toast.error("Item with this size is already in the cart", {
        theme: "dark",
      });
    } else {
      dispatch(
        AddToCart({
          id: product.id,
          name: product.name,
          image: product.image,
          price: product.price,
          quantity,
          color: selectedColor,
          size: selectedSize,
        })
      );

      toast.success("Item Added To Cart!", {
        theme: "dark",
        autoClose: 1000,
      });
    }
  };

  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <TopHeader />
      <Header />
      <Divider
        sx={{
          mt: 2,
          width: { xs: "100%", md: "81%" },
          marginLeft: { xs: 0, md: "170px" },
        }}
      />
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                gap: 3,
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <ProductThumbnails
                thumbnails={[product.image, product.image, product.image]}
                selectedThumbnail={selectedThumbnail}
                handleThumbnailClick={handleThumbnailClick}
              />
              <Box sx={{ flex: 1 }}>
                <img
                  src={product.image}
                  alt="Product"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "contain", 
                  }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <ProductInfo
              name={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
            <Typography
              variant="body1"
              sx={{
                mt: 2,
                fontSize: { xs: "14px", sm: "16px" },
                lineHeight: "22px",
                fontWeight: "400",
                color: "grey",
              }}
            >
              This graphic t-shirt is perfect for any occasion. Crafted from a
              soft and breathable fabric, it offers superior comfort and style.
            </Typography>

            <Divider sx={{ mt: 3 }} />
            <Box sx={{ mt: "40px" }}>
              <MyButtons onSelectSize={setSelectedSize} />
            </Box>
            <Divider sx={{ mt: 3 }} />
            <ProductDetailsActions
              productId={product.id}
              quantity={quantity}
              onIncrement={handleIncrement}
              onDecrement={handleDecrement}
              selectedSize={selectedSize}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        </Grid>

        <ProductTabs />
      </Container>
      <SuggestedProducts />
      <Box
        sx={{
          marginTop: "120px",
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetail;

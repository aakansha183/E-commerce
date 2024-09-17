import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import SuggestedProducts from "./Components/ComponentProductCard";
import ProductTabs from "./Components/ComponentProductTabs";
import { addToCart } from "../../Redux/cartSlice";
import { RootState } from "../../Redux/Store";
import ProductThumbnails from "./Components/ComponentThumbnail";
import ProductInfo from "./Components/ComponentProductInfo";
import ProductDetailsActions from "./Components/ComponentDetailedAction";
import MyButtons from "./Components/ComponentButton";
import Grid from "@mui/material/Grid2";
import {
  containerStyles,
  dividerStyles,
  thumbnailsContainerStyles,
  imageBoxStyles,
  productImageStyles,
  descriptionTranslationstyles,
  actionsBoxStyles,
  footerBoxStyles,
} from "../PageProductDetails/StyleProductDetails/StyleProductDetails";
import { Translations } from "../../Utils/Translation/Translation";
import { Product } from "./Utils/Interfaces/InterfaceProductDetailsActions";
import { showToastError, showToastSuccess } from "../../CommonComponents/Toast";
import { theme } from "./Utils/Theme/Theme";
import ProductImage from "./Components/ComponentImage";
import {Box,Divider} from "@mui/material"
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const ProductDetail: React.FC = () => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(
    null
  );
  const [quantity, setQuantity] = useState<number>(1);

  const location = useLocation();
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const { product } = location.state as { product: Product };

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  const updateQuantity = (action: "increment" | "decrement") => {
    setQuantity((prevQuantity) =>
      action === "increment" ? prevQuantity + 1 : Math.max(prevQuantity - 1, 1)
    );
  };

  const handleaddToCart = () => {
    if (!selectedSize) {
      showToastError("Select a Size");
      return;
    } else {
      const selectedColor = theme.colors.selectedColor;
  
      const isItemInCart = cartItems.find(
        (item) => item.id === product.id && item.size === selectedSize
      );
  
      if (isItemInCart) {
        showToastError("Item is already in the cart");
      } else {
        dispatch(
          addToCart({
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            quantity,
            color: selectedColor,
            size: selectedSize,
          })
        );
  
        showToastSuccess("Item added to Cart Successfully");
      }
    }
  };
  
  return (
    <Box sx={containerStyles}>
      <TopHeader />
      <Header />
      <Divider sx={dividerStyles} />
      <Container maxWidth="xl" sx={{ marginTop: "50px" }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={thumbnailsContainerStyles}>
              <ProductThumbnails
                thumbnails={[product.image, product.image, product.image]}
                selectedThumbnail={selectedThumbnail}
                handleThumbnailClick={handleThumbnailClick}
              />
              <Box sx={imageBoxStyles}>
                <ProductImage
                  src={product.image}
                  alt="Product"
                  style={productImageStyles}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ProductInfo
              name={product.name}
              rating={product.rating}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
            />
            <Typography variant="body1" sx={descriptionTranslationstyles}>
              {Translations.ProductDes}
            </Typography>

            <Divider sx={{ mt: 3 }} />
            <Box sx={actionsBoxStyles}>
              <MyButtons onSelectSize={setSelectedSize} />
            </Box>
            <Divider sx={{ mt: 3 }} />
            <ProductDetailsActions
              productId={product.id}
              quantity={quantity}
              onIncrement={() => updateQuantity("increment")}
              onDecrement={() => updateQuantity("decrement")}
              selectedSize={selectedSize}
              handleaddToCart={handleaddToCart}
            />
          </Grid>
        </Grid>
        <ProductTabs />
      </Container>
      <SuggestedProducts />
      <Box sx={footerBoxStyles}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetail;

import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import CartComponent from "./Components/CartComponent";
import Footer from "../../CommonComponents/Footer";
import {
  containerStyles,
  headerBoxStyles,
  dividerStyles,
  cartBoxStyles,
  footerBoxStyles,
} from "../PageCart/StyleCart/StyleCartPage";

const CartPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box sx={containerStyles}>
      <TopHeader />
      <Box sx={headerBoxStyles}>
        <Header />
      </Box>
      <Divider sx={dividerStyles} />
      <Box sx={cartBoxStyles}>
        <CartComponent />
      </Box>
      <Box sx={footerBoxStyles}>
        <Footer />
      </Box>
    </Box>
  );
};

export default CartPage;

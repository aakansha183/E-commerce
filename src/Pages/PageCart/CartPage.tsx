import { Box, Divider, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import CartComponent from "./Components/CartComponent";
import Footer from "../../CommonComponents/Footer";

const CartPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); 
  return (
    <Box sx={{ width: "100%", overflowX: "hidden" }}>
      <TopHeader />
      <Box sx={{ mt: isMobile ? 2 : 0 }}> 
        <Header />
      </Box>
      <Divider
        sx={{
          mt: 2,
          width: isMobile ? '90%' : '81%', 
          marginLeft: isMobile ? 'auto' : '168px', 
          marginRight: isMobile ? 'auto' : 'unset', 
        }}
      />
      <Box
        sx={{
          marginBottom: '250px',
          mt: isMobile ? 3 : 0, 
          px: isMobile ? 2 : 0, 
        }}
      >
        <CartComponent />
      </Box>
      <Box sx={{ mt: isMobile ? 4 : 0 }}> 
        <Footer />
      </Box>
    </Box>
  );
};

export default CartPage;


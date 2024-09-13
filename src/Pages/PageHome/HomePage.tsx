import React from "react";
import { Box, Button, Typography } from "@mui/material";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import HeroSection from "./Components/HeroSection";
import BrandBar from "./Components/BrandHeader";
import NewArrivals from "./Components/NewArrival";
import TopSelling from "./Components/TopSelling";
import HappyCustomers from "./Components/Testimonials";
import Footer from "../../CommonComponents/Footer";
import DressStyleComponent from "./Components/BrowseDressStyle";

const HomePage: React.FC = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <TopHeader />
      <Header />
      {/* <HeroSection/> */}
      {/* <BrandBar/> */}
      <NewArrivals/>
      <TopSelling/>
      {/* <DressStyleComponent/> */}
      <HappyCustomers/>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default HomePage;

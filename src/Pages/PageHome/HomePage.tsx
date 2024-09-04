import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TopHeader from '../../CommonComponents/TopHeader';
import Header from '../../CommonComponents/Header';
import HeroSection from './Components/HeroSection';
import BrandBar from './Components/BrandHeader';
import NewArrivals from './Components/NewArrival';
import TopSelling from './Components/TopSelling';
import BrowseDressStyle from './Components/BrowseDressStyle';
import Footer from '../../CommonComponents/Footer';
import BrowseByDressStyle from './Components/BrowseDressStyle';
import HappyCustomers from './Components/Testimonials';

const HomePage: React.FC = () => {
  return (
    <Box>
      <TopHeader />
      <Header />
      <HeroSection/>
     <BrandBar/>
     <NewArrivals/>
     <TopSelling/>
     <BrowseByDressStyle/>
    <HappyCustomers/>
      </Box>
    
  );
};

export default HomePage;

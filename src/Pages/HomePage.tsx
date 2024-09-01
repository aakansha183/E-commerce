import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import TopHeader from '../CommonComponents/TopHeader';
import Header from '../CommonComponents/Header';
import HomePageImage from '../Assests/Images/HomePage.png'
import Footer from '../CommonComponents/Footer';

const HomePage: React.FC = () => {
  return (
    <Box>
      <TopHeader />
      <Header />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '2rem',
          backgroundColor: '#F2F0F1',
        }}
      >
        <Box >
          <Box>
          <Typography variant="h2" sx={{ fontWeight: 'bold', marginBottom: '1rem', lineHeight: '64px',left:300, width: 577 }}>
            FIND CLOTHES THAT MATCH YOUR STYLE
          </Typography>
          </Box>
          <Typography variant="body1" sx={{ marginBottom: '2rem', marginLeft: '90px' }}>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: '#000', padding: '0.75rem 2rem' }}>
            Shop Now
          </Button>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '3rem' }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                200+
              </Typography>
              <Typography variant="body2">International Brands</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                2,000+
              </Typography>
              <Typography variant="body2">High-Quality Products</Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                30,000+
              </Typography>
              <Typography variant="body2">Happy Customers</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          component="img"
          src={HomePageImage}
          alt="Fashion banner"
          sx={{ 
            width: '70%', 
                   marginRight: '20px'      
          }}
        />
      </Box>
   
      <Box>
      
      <Footer/>
      </Box>
    </Box>
  );
};

export default HomePage;

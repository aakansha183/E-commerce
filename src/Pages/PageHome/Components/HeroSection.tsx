import React from 'react';
import { Box, Button, Typography, Grid, Container, Grid2 } from '@mui/material';
import HeroImage from '../../../Assests/Images/HeroImage.png'; 
import { useNavigate } from 'react-router-dom';
import StarIcon from '../../../Assests/ImagesData/StarIcon';

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    
    <Box
      sx={{
        marginTop:'10px',
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#000', 
        padding: '60px 0',
        width: '100%',
        height: '660px',
      }}
    >
      <Container>
        <Grid container  justifyContent="flex-start"  sx={{ marginLeft: '-200px',marginTop:'70px' }}> 
          <Grid item xs={12} md={6}>
           
            <Typography variant="h2" component="h1" sx={{ fontWeight: '700',fontFamily:'Poppins',fontSize:'64px',lineHeight:'64px' }}>
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Typography>
            <Typography variant="subtitle1" sx={{ marginTop: 2, marginBottom: 4 ,fontWeight:'400',fontSize:'16px',lineHeight:'22px',color:'grey'}}>
              Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
            </Typography>

            <Button variant="contained" color="primary" sx={{ backgroundColor: 'black', color: 'white', padding: '16px 54px 16px 54px',width:'210px',height:'52px',borderRadius:'62px' }} onClick={() => { 
              window.scrollTo(0,0);
          navigate("/Category");
         
        }}>
              Shop Now
            </Button>
          </Grid>
        </Grid >
        
        <Grid container justifyContent="flex-start" spacing={5} sx={{ marginTop: 1 ,marginLeft:-28,fontWeight:'700',fontSize:'40px',lineHeight:'54px'}}> {/* Align the stats section to the left */}
          <Grid item>
            <Typography variant="h6" sx = {{fontWeight:'700',fontSize:'40px',lineHeight:'54px'}}>200+</Typography>
            <Typography variant="body2"sx ={{fontWeight:'400',fontSize:"15px",lineHeight:'22px',color:'grey',width:'141px',height:'22px'}}>International Brands</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx = {{fontWeight:'700',fontSize:'40px',lineHeight:'54px'}}>2,000+</Typography>
            <Typography variant="body2" sx ={{fontWeight:'400',fontSize:"15px",lineHeight:'22px',color:'grey',width:'150px',height:'22px'}}>High-Quality Products</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" sx = {{fontWeight:'700',fontSize:'40px',lineHeight:'54px'}}>30,000+</Typography>
            <Typography variant="body2" sx ={{fontWeight:'400',fontSize:"15px",lineHeight:'22px',color:'grey',width:'141px',height:'22px'}}>Happy Customers</Typography>
          </Grid>
        </Grid>
        <Box sx=  {{
          marginLeft:'1200px',
          marginTop:'-500px'
        }}>

       
        <StarIcon/>
        </Box>
        <Box sx= {{
         marginLeft:'650px',
         marginTop:'80px'

        }}>
          <StarIcon/>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

import React from 'react';
import { Box, Typography, Button, Grid, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import GreenShirt from '../../../Assests/Images/GreenShirt.png';
import OrangeTshirt from '../../../Assests/Images/OrangeTshirt.png';
import Shorts from '../../../Assests/Images/DenimShorts.png';
import Jeans from '../../../Assests/Images/Jeans.png';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    id: 5,
    image: GreenShirt,
    name: 'Vertical Striped Shirt',
    price: '212',
    originalPrice: '232',
    discount: '-20%',
    rating: 5.0,
  },
  {
    id: 6,
    image: OrangeTshirt,
    name: 'Courage Graphic T-shirt',
    price: '145',
    rating: 4.0,
  },
  {
    id: 7,
    image: Shorts,
    name: 'Loose Fit Bermuda Shorts',
    price: '80',
    rating: 3.0,
  },
  {
    id: 8,
    image: Jeans,
    name: 'Faded Skinny Jeans',
    price: '210',
    rating: 4.5,
  },
];

const TopSelling: React.FC = () => {
  const navigate = useNavigate();
  
  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          if (rating >= ratingValue) return <StarIcon key={index} style={{ color: '#ffcc00' }} />;
          if (rating >= ratingValue - 0.5) return <StarHalfIcon key={index} style={{ color: '#ffcc00' }} />;
          return <StarOutlineIcon key={index} style={{ color: '#ffcc00' }} />;
        })}
      </>
    );
  };

  return (
    <Box sx={{ textAlign: 'center', my: 5, marginRight: 8, padding: '40px 150px' }}>
      <Divider sx={{ marginBottom: 8, marginTop: -3, width: '103%', marginLeft: '20px' }} />
      <Typography variant="h4" sx={{ fontWeight: '700', fontSize: '48px', lineHeight: '57.6px', fontFamily: 'Poppins', marginBottom: '20px' }}>
        TOP SELLING
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box
              sx={{
                p: 2,
                borderRadius: '8px',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ width: '120%', borderRadius: '8px', marginBottom: '15px' }}
                onClick={() => { navigate('/ProductDetails', { state: { product } }); window.scrollTo(0, 0); }}
              />
              <Typography variant="subtitle1" sx={{ fontWeight: 700, mt: 2, textAlign: 'left', marginLeft: '10px', fontSize: '20px', lineHeight: '27px' }}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, marginLeft: '10px' }}>
                {renderStars(product.rating)}
                <Typography variant="body2" sx={{ marginLeft: '10px', fontWeight: '400', fontSize: '14px', lineHeight: '18.9px' }}>
                  {product.rating}/5
                </Typography>
              </Box>
              <Box sx={{ mt: 1, textAlign: 'left', marginLeft: '10px' }}>
                <Typography variant="h6" fontWeight="700" fontSize={'24px'} lineHeight={'32.4px'}>
                  ${product.price}
                  {product.originalPrice && (
                    <Typography
                      component="span"
                      variant="body2"
                      sx={{ textDecoration: 'line-through', ml: 1, color: '#D3D3D3', fontWeight: '700', fontSize: '24px', lineHeight: '32.4px' }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                {product.discount && (
                  <Typography variant="body2" sx={{ color: '#FF3333', fontWeight: 'bold', backgroundColor: '#FFE9F0', padding: '6px 14px', marginLeft: 17, marginTop: -4, width: '40px', borderRadius: '62px', textAlign: 'center' }}>
                    {product.discount}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" onClick={() => { 
          navigate("/Category");
          window.scrollTo(0, 0);
        }} sx={{ mt: 2, width: '218px', height: '52px', borderRadius: '62px', textTransform: 'none', padding: '16px 54px', fontWeight: 'bold', borderColor: '#D3D3D3', color: 'black' }}>
        <Typography sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '21.6px' }}>
          View All
        </Typography>
      </Button>
    </Box>
  );
};

export default TopSelling;

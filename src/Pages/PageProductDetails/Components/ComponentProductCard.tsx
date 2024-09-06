import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import BlueTshirt from '../../../Assests/Images/BlueShirt.png';
import PrintedTshirt from '../../../Assests/Images/PrintedShirt.png';
import PinkTshirt from '../../../Assests/Images/PinkT-Shirt.png';
import CheckTshirt from '../../../Assests/Images/CheckT-shirt.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  discount?: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 10,
    name: 'Polo with Contrast Trims',
    image: BlueTshirt,
    price: 212,
    originalPrice: 242,
    discount: '-20%',
    rating: 4.0,
  },
  {
    id: 11,
    name: 'Gradient Graphic T-shirt',
    image: PrintedTshirt,
    price: 145,
    rating: 3.5,
  },
  {
    id: 1,
    name: 'Polo with Tipping Details',
    image: PinkTshirt,
    price: 180,
    rating: 4.5,
  },
  {
    id: 13,
    name: 'Black Striped T-shirt',
    image: CheckTshirt,
    price: 120,
    originalPrice: 150,
    discount: '-30%',
    rating: 5.0,
  },
];

const SuggestedProducts: React.FC = () => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => {
    return (
      <Rating value={rating} precision={0.5} readOnly sx={{ color: '#FFC633' }} />
    );
  };

  return (
    <Box id="newarrivals" sx={{ textAlign: 'center', mt: 4, padding: '40px 150px', marginRight: 8 }}>
      <Typography
        variant="h4"
        sx={{ fontWeight: '700', fontSize: '48px', lineHeight: '57.6px', fontFamily: 'Poppins', marginBottom: '20px' }}
      >
        YOU MIGHT ALSO LIKE
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <Box
              sx={{
                p: 2,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <Box
                component="img"
                onClick={() => {
                  navigate('/ProductDetails', { state: { product } });
                  window.scrollTo(0, 0);
                }}
                src={product.image}
                alt={product.name}
                sx={{ width: '120%', borderRadius: 4 }}
              />
              <Typography
                variant="subtitle1"
                fontWeight="700"
                sx={{ mt: 2, textAlign: 'left', marginLeft: '10px', fontSize: '20px', lineHeight: '27px' }}
              >
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, marginLeft: '10px' }}>
                {renderStars(product.rating)}
                <Typography
                  variant="body2"
                  sx={{ marginLeft: '10px', fontWeight: '400', fontSize: '14px', lineHeight: '18.9px' }}
                >
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
                      sx={{
                        textDecoration: 'line-through',
                        ml: 1,
                        color: '#D3D3D3',
                        fontWeight: '700',
                        fontSize: '24px',
                        lineHeight: '32.4px',
                      }}
                    >
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                {product.discount && (
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#FF3333',
                      fontWeight: 'bold',
                      backgroundColor: '#FFE9F0',
                      padding: '6px 14px 6px 14px',
                      marginLeft: 17,
                      marginTop: -4,
                      width: '40px',
                      borderRadius: '62px',
                      textAlign: 'center',
                    }}
                  >
                    {product.discount}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={() => {
          navigate('/Category');
          window.scrollTo(0, 0);
        }}
        sx={{
          mt: 2,
          width: '218px',
          height: '52px',
          borderRadius: '62px',
          textTransform: 'none',
          padding: '16px 54px 16px 54px',
          fontWeight: 'bold',
          borderColor: '#D3D3D3',
          color: 'black',
          marginBottom:'100px'
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '21.6px',
          }}
        >
          View All
        </Typography>
      </Button>
    </Box>
  );
};

export default SuggestedProducts;

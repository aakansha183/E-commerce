import React from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';

interface ProductInfoProps {
  name: string;
  rating: number;
  price: number;
  originalPrice?: number;
  discount?: string;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ name, rating, price, originalPrice, discount }) => {
  const renderStars = (rating: number) => (
    <>
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        if (rating >= ratingValue) return <StarIcon key={index} style={{ color: '#ffcc00' }} />;
        if (rating >= ratingValue - 0.5) return <StarHalfIcon key={index} style={{ color: '#ffcc00' }} />;
        return <StarOutlineIcon key={index} style={{ color: '#ffcc00' }} />;
      })}
    </>
  );

  return (
    <Box sx={{ width: { xs: '100%', sm: '80%', md: '70%', lg: 'auto' }, mx: 'auto' }}>
      <Typography
        variant="h4"
        fontWeight="700"
        lineHeight="48px"
        fontSize="40px"
        fontFamily="Poppins"
        textAlign="left"
        sx={{ mb: 1 }}
      >
        {name}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'left', mt: 1 }}>
        {renderStars(rating)}
        <Typography
          variant="body2"
          sx={{ ml: 1, color: '#000000', fontSize: '16px', fontWeight: '400' }}
        >
          {rating}/5
        </Typography>
      </Box>
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '43.2px',
          color: '#000000',
          fontFamily: 'Poppins',
          textAlign: 'left'
        }}
      >
        ${price}
        {originalPrice && (
          <Typography
            component="span"
            variant="body2"
            sx={{
              textDecoration: 'line-through',
              ml: '10px',
              color: '#D3D3D3',
              fontWeight: '700',
              fontSize: '32px',
              lineHeight: '43.2px',
              fontFamily: 'Poppins',
            }}
          >
            ${originalPrice}
          </Typography>
        )}
        {discount && (
          <Box
            component="span"
            sx={{
              ml: '12px',
              p: '7px 15px',
              backgroundColor: '#FFE9F0',
              borderRadius: '60px',
              fontSize: '16px',
              fontWeight: '500',
              color: '#FF3333',
            }}
          >
            {discount}
          </Box>
        )}
      </Typography>
    </Box>
  );
};

export default ProductInfo;

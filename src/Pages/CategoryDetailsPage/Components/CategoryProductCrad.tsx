import React from 'react';
import { Box, Grid, Typography, Button, Rating, Pagination, Divider } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

import Image1 from '../../../Assests/Images/image 8.png';
import Image2 from '../../../Assests/Images/Frame 72.png';
import Image3 from '../../../Assests/Images/Frame 73.png';
import Image4 from '../../../Assests/Images/T-shirt.png';
import Image5 from '../../../Assests/Images/Frame 70.png';
import Image6 from '../../../Assests/Images/Frame 71.png';
import Image7 from '../../../Assests/Images/Frame 32.png';
import Image8 from '../../../Assests/Images/Frame 33.png';
import Image9 from '../../../Assests/Images/Frame 38.png';

const products = [
  {
    id: 1,
    name: 'Gradient Graphic T-shirt',
    price: 145,
    rating: 3.5,
    image: Image1,
    originalPrice: null,
    discount: null,
  },
  {
    id: 2,
    name: 'Polo with Tipping Details',
    price: 180,
    rating: 4.5,
    image: Image2,
    originalPrice: null,
    discount: null,
  },
  {
    id: 3,
    name: 'Black Striped T-shirt',
    price: 120,
    rating: 4.0,
    image: Image3,
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 4,
    name: 'Skinny Fit Jeans',
    price: 240,
    rating: 3.5,
    image: Image4,
    originalPrice: 260,
    discount: 20,
  },
  {
    id: 5,
    name: 'Checkered Shirt',
    price: 180,
    rating: 4.5,
    image: Image5,
    originalPrice: null,
    discount: null,
  },
  {
    id: 6,
    name: 'Sleeve Striped T-shirt',
    price: 130,
    rating: 4.5,
    image: Image6,
    originalPrice: 160,
    discount: 30,
  },
  {
    id: 7,
    name: 'Vertical Striped Shirt',
    price: 212,
    rating: 5.0,
    image: Image7,
    originalPrice: 320,
    discount: 30,
  },
  {
    id: 8,
    name: 'Courage Graphic T-shirt',
    price: 145,
    rating: 4.0,
    image: Image8,
    originalPrice: null,
    discount: null,
  },
  {
    id: 9,
    name: 'Loose Fit Bermuda Shorts',
    price: 80,
    rating: 3.0,
    image: Image9,
    originalPrice: null,
    discount: null,
  },
];

const ProductGrid: React.FC = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" sx={{ marginBottom: 2, fontWeight: 'bold' }}>
        Casual
      </Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ marginBottom: 2 }}>
        <Typography variant="body1">Showing 1-10 of 100 Products</Typography>
        <Button variant="text" endIcon={<StarIcon />}>
          Sort by: Most Popular
        </Button>
      </Box>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} md={4} key={product.id}>
            <Box sx={{ border: '1px solid #ddd', borderRadius: 2, padding: 2 }}>
              <Box
                component="img"
                src={product.image}
                alt={product.name}
                sx={{ width: '100%', borderRadius: 2, marginBottom: 2 }}
              />
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                sx={{ fontSize: '1rem', marginBottom: 1 }}
              />
              <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  ${product.price}
                </Typography>
                {product.originalPrice && (
                  <>
                    <Typography
                      variant="body2"
                      sx={{ textDecoration: 'line-through', marginLeft: 1, color: '#888' }}
                    >
                      ${product.originalPrice}
                    </Typography>
                    <Typography variant="body2" sx={{ marginLeft: 1, color: '#FF0000', fontWeight: 'bold' }}>
                      {product.discount}% off
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 3 }} />
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Button variant="outlined">Previous</Button>
        <Pagination count={10} shape="rounded" />
        <Button variant="outlined">Next</Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;


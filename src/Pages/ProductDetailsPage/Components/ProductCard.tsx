import React from 'react';
import { Box, Typography, Grid, Rating } from '@mui/material';

import image1 from '../../../Assests/Images/Frame 32.png';
import image2 from '../../../Assests/Images/Frame 33.png';
import image3 from '../../../Assests/Images/Frame 34.png';
import image4 from '../../../Assests/Images/Frame 38.png';

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Polo with Contrast Trims',
    image: image1,
    price: 212,
    oldPrice: 242,
    discount: '-20%',
    rating: 4.0,
  },
  {
    id: 2,
    name: 'Gradient Graphic T-shirt',
    image: image2,
    price: 145,
    rating: 3.5,
  },
  {
    id: 3,
    name: 'Polo with Tipping Details',
    image: image3,
    price: 180,
    rating: 4.5,
  },
  {
    id: 4,
    name: 'Black Striped T-shirt',
    image: image4,
    price: 120,
    oldPrice: 150,
    discount: '-30%',
    rating: 5.0,
  },
];

const ProductCard: React.FC<Product> = ({ name, image, price, oldPrice, discount, rating }) => {
  return (
    <Box textAlign="center">
      <img src={image} alt={name} style={{ maxWidth: '100%', borderRadius: '20px' }} />
      <Typography variant="h6" fontWeight="bold" sx={{ marginTop: 1 }}>
        {name}
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center" sx={{ marginTop: 0.5 }}>
        <Rating value={rating} precision={0.5} readOnly sx={{ color: '#FFC633' }} />
        <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 0.5 }}>
          {rating}/5
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0.5 }}>
        <Typography variant="h6" fontWeight="bold">
          ${price}
        </Typography>
        {oldPrice && (
          <Typography
            variant="body2"
            color="textSecondary"
            sx={{ textDecoration: 'line-through', marginLeft: 0.5 }}
          >
            ${oldPrice}
          </Typography>
        )}
        {discount && (
          <Typography
            variant="body2"
            sx={{
              backgroundColor: '#FFC633',
              color: '#fff',
              borderRadius: '5px',
              padding: '2px 5px',
              marginLeft: 0.5,
            }}
          >
            {discount}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const SuggestedProducts: React.FC = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" fontWeight="bold" textAlign="center" marginBottom={4}>
        YOU MIGHT ALSO LIKE
      </Typography>
      <Grid container spacing={0} justifyContent="center">
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={3} key={product.id}>
            <ProductCard {...product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuggestedProducts;


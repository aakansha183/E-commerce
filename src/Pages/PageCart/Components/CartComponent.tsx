import React from 'react';
import { Box, Grid, Typography, Button, IconButton, TextField, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import BlackTshirt from '../../../Assests/Images/BlackTshirt.png';
import Jeans from '../../../Assests/Images/Jeans.png';
import CheckedShirt from '../../../Assests/Images/BlueRedCheckedShirt.png';

interface CartItem {
  id: number;
  name: string;
  size: string;
  color: string;
  price: number;
  image: string;
  quantity: number;
}

const CartComponent: React.FC = () => {
  const cartItems: CartItem[] = [
    {
      id: 1,
      name: 'Gradient Graphic T-shirt',
      size: 'Large',
      color: 'White',
      price: 145,
      image: BlackTshirt,
      quantity: 1,
    },
    {
      id: 2,
      name: 'Checkered Shirt',
      size: 'Medium',
      color: 'Red',
      price: 180,
      image: Jeans,
      quantity: 1,
    },
    {
      id: 3,
      name: 'Skinny Fit Jeans',
      size: 'Large',
      color: 'Blue',
      price: 240,
      image: CheckedShirt,
      quantity: 1,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discount = subtotal * 0.2; // Assuming a 20% discount
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  return (
    <Box display="flex" justifyContent="space-between" padding={4} sx={{ backgroundColor: '#fff', borderRadius: '10px' }}>
      {/* Cart Items Section */}
      <Box flex={2} pr={4}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          YOUR CART
        </Typography>
        {cartItems.map((item) => (
          <Box key={item.id} display="flex" alignItems="center" mb={4} sx={{ borderBottom: '1px solid #e0e0e0', pb: 2 }}>
            <Box component="img" src={item.image} alt={item.name} width={100} height={100} sx={{ borderRadius: '10px' }} />
            <Box flex={1} pl={2}>
              <Typography variant="h6" fontWeight="bold">
                {item.name}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Size: {item.size}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Color: {item.color}
              </Typography>
              <Typography variant="h6" fontWeight="bold" mt={1}>
                ${item.price}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <Button variant="outlined" size="small" sx={{ minWidth: '32px' }}>
                -
              </Button>
              <Typography variant="body1" mx={2}>
                {item.quantity}
              </Typography>
              <Button variant="outlined" size="small" sx={{ minWidth: '32px' }}>
                +
              </Button>
              <IconButton color="error" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Order Summary Section */}
      <Box flex={1} sx={{ border: '1px solid #e0e0e0', borderRadius: '10px', padding: '20px' }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Order Summary
        </Typography>
        <Box mb={2}>
          <Grid container justifyContent="space-between">
            <Typography variant="body1">Subtotal</Typography>
            <Typography variant="body1">${subtotal}</Typography>
          </Grid>
          <Grid container justifyContent="space-between" mt={1}>
            <Typography variant="body1" color="error">
              Discount (-20%)
            </Typography>
            <Typography variant="body1" color="error">
              -${discount.toFixed(2)}
            </Typography>
          </Grid>
          <Grid container justifyContent="space-between" mt={1}>
            <Typography variant="body1">Delivery Fee</Typography>
            <Typography variant="body1">${deliveryFee}</Typography>
          </Grid>
        </Box>
        <Divider />
        <Box mt={2} mb={2}>
          <Grid container justifyContent="space-between">
            <Typography variant="h6">Total</Typography>
            <Typography variant="h6">${total}</Typography>
          </Grid>
        </Box>
        <TextField
          label="Add promo code"
          variant="outlined"
          fullWidth
          sx={{ backgroundColor: '#f8f8f8', borderRadius: '5px' }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: '#000',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
        >
          Apply
        </Button>
        <Button
          variant="contained"
          fullWidth
          sx={{
            mt: 2,
            backgroundColor: '#000',
            color: '#fff',
            fontWeight: 'bold',
            borderRadius: '5px',
            '&:hover': {
              backgroundColor: '#333',
            },
          }}
          endIcon={<span style={{ marginLeft: 'auto' }}>→</span>}
        >
          Go to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default CartComponent;

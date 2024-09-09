import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Button, Divider, IconButton } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../Redux/Store';
import IncrementDecrementBox from '../../PageProductDetails/Components/ComponentIncrementDecrementBox';
import DeleteIcon from '../../../Assests/ImagesData/DeleteIcon';
import { removeItem } from '../../../Redux/cartSlice'; 
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TagIcon from '../../../Assests/ImagesData/TagIcon';

type ItemId = string;

const CartComponent: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const [itemQuantities, setItemQuantities] = useState<Record<ItemId, number>>({});
  const [addedItems, setAddedItems] = useState<Set<ItemId>>(new Set());

  const handleIncrement = (itemId: ItemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: (prevQuantities[itemId] || 1) + 1,
    }));
  };

  const handleDecrement = (itemId: ItemId) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemId]: Math.max((prevQuantities[itemId] || 1) - 1, 1),
    }));
  };

  const handleDelete = (itemId: ItemId) => {
    dispatch(removeItem(itemId));
    toast.info('Item removed from cart', {
      theme: 'dark',
      autoClose: 2000,
    });
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * (itemQuantities[item.id] || 1), 0);
  const discount = subtotal * 0.2;
  const deliveryFee = 15;
  const total = subtotal - discount + deliveryFee;

  useEffect(() => {
    setAddedItems(new Set());
  }, [cartItems]);

  return (
    <Box sx = {{marginLeft:'20px'}}>
      <Typography
        sx={{
          fontFamily: 'Poppins',
          fontWeight: '700',
          fontSize: '40px',
          lineHeight: '48px',
          marginLeft: '170px',
          marginTop: '80px',
        }}
      >
        YOUR CART
      </Typography>
      <Box display="flex" padding={'15px 170px'} sx={{ backgroundColor: '#ffffff', marginBottom: -15 }}>
        <Box flex={1.3} sx={{ border: '1px solid #e0e0e0', marginRight: '20px', borderRadius: '20px' }}>
          {cartItems.map((item, index) => (
            <Box key={item.id}>
              <Box display="flex" alignItems="center" mb={4} sx={{ padding: '20px 24px' }}>
                <Box component="img" src={item.image} alt={item.name} width={100} height={100} sx={{ borderRadius: '10px' }} />
                <Box flex={1} pl={2}>
                  <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '20px', lineHeight: '27px' }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ color: 'black' }}>Color:</span>
                    <Typography variant="body2" component="span" style={{ color: 'grey' }}>
                      {item.color}
                    </Typography>
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: '700', marginTop: 1, fontSize: '24px', lineHeight: '32.4px' }}>
                    ${item.price}
                  </Typography>
                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-end">
                  <Box onClick={() => handleDelete(item.id)}>
                    <IconButton>
                    <DeleteIcon />
                    </IconButton>
                  </Box>
                  <IncrementDecrementBox
                    count={itemQuantities[item.id] || 1}
                    onIncrement={() => handleIncrement(item.id)}
                    onDecrement={() => handleDecrement(item.id)}
                  />
                </Box>
              </Box>
              {index < cartItems.length - 1 && <Divider sx={{ margin: '0 24px' }} />}
            </Box>
          ))}
        </Box>

        <Box
          flex={1}
          sx={{
            border: '1px solid #e0e0e0',
            borderRadius: '20px',
            padding: '20px',
            height: '450px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: '700', fontSize: '24px', lineHeight: '32.4px' }}>
            Order Summary
          </Typography>
          <Box mb={2}>
            <Grid container justifyContent="space-between">
              <Typography variant="body1" sx={{ fontWeight: '400', fontSize: '20px', lineHeight: '27px', color: 'grey' }}>
                Subtotal
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: '700', fontSize: '20px', lineHeight: '27px' }}>
                ${subtotal}
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between" mt={1}>
              <Typography variant="body1" sx={{ fontWeight: '400', fontSize: '20px', lineHeight: '27px', color: 'grey' }}>
                Discount (-20%)
              </Typography>
              <Typography variant="body1" sx={{ color: '#FF3333', fontWeight: '700', fontSize: '20px', lineHeight: '27px' }}>
                -${discount.toFixed(2)}
              </Typography>
            </Grid>
            <Grid container justifyContent="space-between" mt={1}>
              <Typography variant="body1" sx={{ fontWeight: '400', fontSize: '20px', lineHeight: '27px', color: 'grey' }}>
                Delivery Fee
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: '700', fontSize: '20px', lineHeight: '27px' }}>
                ${deliveryFee}
              </Typography>
            </Grid>
          </Box>
          <Divider />
          <Box mt={2} mb={2}>
            <Grid container justifyContent="space-between">
              <Typography variant="h6" sx={{ fontWeight: '400', fontSize: '20px', lineHeight: '27px' }}>
                Total
              </Typography>
              <Typography variant="h6" sx={{ fontWeight: '700', fontSize: '24px', lineHeight: '32.4px' }}>
                ${total}
              </Typography>
            </Grid>
          </Box>

          <Box display="flex" alignItems="center" gap="10px" marginBottom={'20px'}>
            <div style={{ position: 'relative', flex: 1 }}>
              <span
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '60%',
                  transform: 'translateY(-50%)',
                  color: '#ccc',
                  fontSize: '20px',
                }}
              >
                <TagIcon />
              </span>
              <input
                type="text"
                placeholder="Add promo code"
                style={{
                  backgroundColor: '#F0F0F0',
                  width: '90%',
                  height: '48px',
                  paddingLeft: '40px',
                  border: '1px solid #ccc',
                  borderRadius: '62px',
                  fontSize: '16px',
                }}
              />
            </div>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: '#000',
                color: '#fff',
                fontWeight: 'bold',
                borderRadius: '62px',
                '&:hover': {
                  backgroundColor: '#333',
                },
                width: '190px',
                height: '48px',
                marginLeft:'40px'
              }}
            >
              Apply
            </Button>
          </Box>

          <Button
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: '#000',
              color: '#fff',
              fontWeight: 'bold',
              borderRadius: '62px',
              '&:hover': {
                backgroundColor: '#333',
              },
              width: '100%',
              padding: '16px 0',
              
              marginBottom:'30px'
            }}
          >
            Go to Checkout
          </Button>
        </Box>
      </Box>
      <ToastContainer />
    </Box>
  );
};

export default CartComponent;

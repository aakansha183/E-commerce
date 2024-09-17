import React from 'react';
import { Box, Button } from '@mui/material';
import IncrementDecrementBox from './ComponentIncrementDecrementBox';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../../Redux/cartSlice';
import { ProductDetailsActionsProps } from '../Utils/Interfaces/InterfaceProductDetailsActions';
import { productDetailsActionsBoxStyle, addToCartButtonStyle } from '../StyleProductDetails/StyleProductDetailsAction'; 
import { Translations } from '../../../Utils/Translation/Translation';

const ProductDetailsActions: React.FC<ProductDetailsActionsProps> = ({
  quantity,
  onIncrement,
  onDecrement,
  selectedSize,
  handleAddToCart,
  productId,
}) => {
  const dispatch = useDispatch();

  const handleIncrement = () => {
    onIncrement();
    dispatch(updateQuantity({ id: productId, quantity: quantity + 1 }));
  };

  const handleDecrement = () => {
    onDecrement();
    dispatch(updateQuantity({ id: productId, quantity: Math.max(1, quantity - 1) }));
  };

  return (
    <Box sx={productDetailsActionsBoxStyle}>
      <IncrementDecrementBox count={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <Button
        variant="contained"
        onClick={handleAddToCart}
        sx={addToCartButtonStyle}
      >
       {Translations.AddtoCart}
      </Button>
    </Box>
  );
};

export default ProductDetailsActions;

import React from 'react';
import { Box, Button } from '@mui/material';
import IncrementDecrementBox from './ComponentIncrementDecrementBox';
import { useDispatch } from 'react-redux';
import { updateQuantity } from '../../../Redux/cartSlice';

interface ProductDetailsActionsProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  selectedSize: string | null;
  handleAddToCart: () => void;
  productId: string;  
}

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
    <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, gap: 2 }}>
      <IncrementDecrementBox count={quantity} onIncrement={handleIncrement} onDecrement={handleDecrement} />
      <Button
        variant="contained"
        onClick={handleAddToCart}
        sx={{ mt: '30px', height: '52px', width: '400px', borderRadius: '62px', backgroundColor: '#000000' }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductDetailsActions;

import React from 'react';
import { Box, Button } from '@mui/material';
import { toast } from 'react-toastify';
import IncrementDecrementBox from './ComponentIncrementDecrementBox';

interface ProductDetailsActionsProps {
  quantity: number;
  onIncrement: () => void;
  onDecrement: () => void;
  selectedSize: string | null;
  handleAddToCart: () => void;
}

const ProductDetailsActions: React.FC<ProductDetailsActionsProps> = ({ quantity, onIncrement, onDecrement, selectedSize, handleAddToCart }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', mt: 3, gap: 2 }}>
    <IncrementDecrementBox count={quantity} onIncrement={onIncrement} onDecrement={onDecrement} />
    <Button
      variant="contained"
      onClick={handleAddToCart}
      sx={{ mt: '30px', height: '52px', width: '400px', borderRadius: '62px', backgroundColor: '#000000' }}
    >
      Add to Cart
    </Button>
  </Box>
);

export default ProductDetailsActions;

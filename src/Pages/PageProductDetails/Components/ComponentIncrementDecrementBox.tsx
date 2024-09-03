import React, { useState } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const IncrementDecrementBox: React.FC = () => {
  const [count, setCount] = useState<number>(1);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); 
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '35px', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, borderRadius: '62px', backgroundColor: '#F0F0F0',height :'52px',padding:'0px 20px 0px 20px' }}>
        <IconButton onClick={handleDecrement}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton onClick={handleIncrement}>
          <AddIcon />
        </IconButton>
      </Box>
      <Button
        variant="contained"
        sx={{
          height: '52px',
          width:'400px',
          borderRadius: '62px',
          backgroundColor: '#000000'
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default IncrementDecrementBox;

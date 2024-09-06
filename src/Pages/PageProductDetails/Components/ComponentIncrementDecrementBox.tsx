import React from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

interface IncrementDecrementBoxProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const IncrementDecrementBox: React.FC<IncrementDecrementBoxProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '35px', mt: 4 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 3, borderRadius: '62px', backgroundColor: '#F0F0F0', height: '52px', padding: '0px 20px 0px 20px' }}>
        <IconButton onClick={onDecrement}>
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{count}</Typography>
        <IconButton onClick={onIncrement}>
          <AddIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default IncrementDecrementBox;


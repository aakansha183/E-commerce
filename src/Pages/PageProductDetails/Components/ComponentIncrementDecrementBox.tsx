import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { IncrementDecrementBoxProps } from '../Utils/Interfaces/InterfaceIncrementDecrementButton';
import { incrementDecrementContainerStyles, incrementDecrementBoxStyles } from '../StyleProductDetails/StyleIncrementDecrementBox';

const IncrementDecrementBox: React.FC<IncrementDecrementBoxProps> = ({ count, onIncrement, onDecrement }) => {
  return (
    <Box sx={incrementDecrementContainerStyles}>
      <Box sx={incrementDecrementBoxStyles}>
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



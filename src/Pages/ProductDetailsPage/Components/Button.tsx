import React, { useState } from 'react';
import { Box, Button } from '@mui/material';

interface StyledButtonProps {
  name: string;
  isClicked: boolean;
  onClick: (name: string) => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ name, isClicked, onClick }) => {
  return (
    <Button
      sx={{
        borderRadius: '62px',
        width: '90px',
        height: '46px',
        backgroundColor: isClicked ? 'black' : '#F0F0F0',
        color: isClicked ? 'white' : 'grey',
        '&:hover': {
          backgroundColor: isClicked ? 'black' : 'grey',
          color: isClicked ? 'white' : 'white',
        },
      }}
      onClick={() => onClick(name)}
    >
      {name}
    </Button>
  );
};

const MyButtons: React.FC = () => {
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  const handleClick = (buttonName: string) => {
    setClickedButton(buttonName);
  };

  const buttons = ['Small', 'Medium', 'Large', 'X-Large'];

  return (
    <Box sx={{ display: 'flex', gap: '12px', mt: 1 }}>
      {buttons.map((button) => (
        <StyledButton
          key={button}
          name={button}
          isClicked={clickedButton === button}
          onClick={handleClick}
        />
      ))}
    </Box>
  );
};

export default MyButtons;

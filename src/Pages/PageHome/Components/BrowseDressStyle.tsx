import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Casual from '../../../Assests/Images/Casual.png'; // Replace with actual path
import Formal from '../../../Assests/Images/Formal.png'; // Replace with actual path
import Party from '../../../Assests/Images/Party.png'; // Replace with actual path
import Gym from '../../../Assests/Images/Gym.png' // Replace with actual path

const dressStyles = [
  {
    id: 1,
    label: 'Casual',
    image: Casual,
  },
  {
    id: 2,
    label: 'Formal',
    image: Formal,
  },
  {
    id: 3,
    label: 'Party',
    image: Party,
  },
  {
    id: 4,
    label: 'Gym',
    image: Gym,
  },
];

const BrowseDressStyle: React.FC = () => {
  return (
    <Box sx={{ width: '1539px', height: '800px', textAlign: 'center', my: 5, backgroundColor: '#F0F0F0', marginLeft: '160px', borderRadius: '40px', padding: '0px 50px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        BROWSE BY DRESS STYLE
      </Typography>
      <Grid container spacing={-13} justifyContent="center">
        {dressStyles.map((style) => (
          <Grid item xs={12} sm={0} md={6} key={style.id}>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '300px', // Adjust the height of the box container
              }}
            >
              <img
                src={style.image}
                alt={style.label}
                style={{ width: '50%', height: 'auto', borderRadius: '12px' }} // Reduce the width of the image to 80%
              />
              <Typography
                variant="h6"
                sx={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  color: '#000',
                  fontWeight: 'bold',
                  backgroundColor: '#ffffff90',
                  padding: '5px 10px',
                  borderRadius: '5px',
                }}
              >
                {style.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BrowseDressStyle;

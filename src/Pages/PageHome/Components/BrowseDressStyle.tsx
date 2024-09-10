import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Casual from '../../../Assests/Images/Casual.png';
import Formal from '../../../Assests/Images/Formal.png';
import Party from '../../../Assests/Images/Party.png';
import Gym from '../../../Assests/Images/Gym.png';
import { useNavigate } from 'react-router-dom';
import { styles } from '../StyleHome/HomeStyle';

const DressStyleComponent = () => {
  const navigate = useNavigate();
  return (
    <Box sx={styles.container}>
      <Typography variant="h4" fontWeight="700" align="center" sx={{fontFamily:'Poppins',fontSize:'48px',lineHeight:'57.6px',marginTop:'40px',marginBottom:'50px'}}>
        BROWSE BY DRESS STYLE
      </Typography>

      <Grid container spacing={2}>
        <Grid container item xs={12} spacing={2} style={{ height: '430px' }}>
          <Grid item xs={6}>
            <Box sx={{transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },}}>
              <img src={Casual} alt="Casual" style={{ ...styles.image, height: '10%', width: '73%' }} onClick={() => {
          navigate('/Category');
          window.scrollTo(0, 0);
        }}/>
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx ={{ marginLeft: '-130px',transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                }, }}>
              <img src={Formal} alt="Formal" style={{ ...styles.image, height: '100%', width: '100%' }} onClick={() => {
          navigate('/Category');
          window.scrollTo(0, 0);
        }}/>
            </Box>
          </Grid>
        </Grid>

        <Grid container item xs={12} spacing={2}>
          <Grid item xs={6} style={{ marginTop: '-140px' }}>
            <Box sx={{
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
            }}>
              <img src={Party} alt="Party" style={{ ...styles.image, height: '50%', width: '100%' }} onClick={() => {
          navigate('/Category');
          window.scrollTo(0, 0);
        }}/> 
            </Box>
          </Grid>

          <Grid item xs={6} style={{ marginTop: '-140px' }}>
          <Box 
  sx={{ 
    ...styles.gridItem, 
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    }
  }}
>
  <img 
    src={Gym} 
    alt="Gym" 
    style={{ 
      ...styles.image, 
      height: '50%', 
      width: '100%', 
      marginLeft: '5px', 
      marginBottom: '-140px' 
    }} 
    onClick={() => {
      navigate('/Category');
      window.scrollTo(0, 0);
    }}
  />
</Box>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';
import Casual from '../../../Assests/Images/Casual.png';
import Formal from '../../../Assests/Images/Formal.png';
import Party from '../../../Assests/Images/Party.png';
import Gym from '../../../Assests/Images/Gym.png';

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '1000px',
    height: '700px',
    backgroundColor: '#F5F5F5',
    borderRadius: '20px',
    padding: '10px 40px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft:'300px',
    marginBottom:'100px'
  },
  header: {
    marginBottom: '30px',
  },
  gridItem: {
    position: 'relative',
    borderRadius: '15px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as 'cover',
  },
  label: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    color: '#000',
    fontWeight: 'bold',
    fontSize: '20px',
  },
};

const DressStyleComponent = () => {
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
              <img src={Casual} alt="Casual" style={{ ...styles.image, height: '10%', width: '73%' }} />
            </Box>
          </Grid>

          <Grid item xs={6}>
            <Box sx ={{ marginLeft: '-130px',transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                }, }}>
              <img src={Formal} alt="Formal" style={{ ...styles.image, height: '100%', width: '100%' }} />
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
              <img src={Party} alt="Party" style={{ ...styles.image, height: '50%', width: '100%' }} /> {/* Set to 50% height */}
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
  />
</Box>

          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;

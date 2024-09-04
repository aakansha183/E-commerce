import React from 'react';
import { Box } from '@mui/material';
import CKIcon from '../../../Assests/ImagesData/CKIcon';
import ParadaIcon from '../../../Assests/ImagesData/ParadaIcon';
import ZaraIcon from '../../../Assests/ImagesData/ZaraIcon';
import VarsacheIcon from '../../../Assests/ImagesData/VarsacheIcon';
import GucciIcon from '../../../Assests/ImagesData/GucciIcon';


const BrandBar: React.FC = () => {
  return (
    <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: '10px 0',
      height:'80px',
      marginTop:-10,
    }}
  >
    <VarsacheIcon  />
    <ZaraIcon  />
    <GucciIcon  />
    <ParadaIcon  />
    <CKIcon  />
  </Box>
  );
};

export default BrandBar;

import React, { useState } from 'react';
import { Box, Container, Grid, Typography, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import productImage from '../../Assests/Images/image 1.png';
import thumbnailImage1 from '../../Assests/Images/image 2.png';
import thumbnailImage2 from '../../Assests/Images/image 5.png';
import thumbnailImage3 from '../../Assests/Images/image 6.png';
import TopHeader from '../../CommonComponents/TopHeader';
import Header from '../../CommonComponents/Header';
import MyButtons from './Components/ComponentButton';
import IncrementDecrementBox from './Components/ComponentIncrementDecrementBox';
import Footer from '../../CommonComponents/Footer';
import SuggestedProducts from './Components/ComponentProductCard';
import ProductTabs from './Components/ComponentProductTabs';

const ProductDetail: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedThumbnail, setSelectedThumbnail] = useState<number | null>(null);

  const handleColorClick = (color: string) => {
    setSelectedColor(color);
  };

  const handleThumbnailClick = (index: number) => {
    setSelectedThumbnail(index);
  };

  return (
    <Box>
      <TopHeader />
      <Header />
      <Divider sx={{ mt: 2 }} />
      <Container maxWidth='xl' sx={{ marginTop: '50px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, }}>
                {[productImage, thumbnailImage2, thumbnailImage3].map((thumbnail, index) => (
                  <Box
                    key={index}
                    sx={{
                      width: '150px',
                      height: '150px',
                      backgroundColor: '#f5f5f5',
                      borderRadius: 2,
                      cursor: 'pointer',
                      border: selectedThumbnail === index ? '1px solid black' : 'none',
                    }}
                    onClick={() => handleThumbnailClick(index)}
                  >
                    <img src={thumbnail} alt={`Thumbnail ${index + 1}`} style={{ width: '100%', height: '100%', borderRadius: '8px' }} />
                  </Box>
                ))}
              </Box>

              <Box sx={{ flex: 1, borderRadius: 2 }}>
                <img src={productImage} alt="Product" style={{ width: '77%', height: 'auto', borderRadius: '8px' }} />
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight='700' lineHeight='48px' fontSize='40px'>ONE LIFE GRAPHIC T-SHIRT</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
              <StarIcon sx={{ color: '#FFC633' }} />
              <StarIcon sx={{ color: '#FFC633' }} />
              <StarIcon sx={{ color: '#FFC633' }} />
              <StarIcon sx={{ color: '#FFC633' }} />
              <StarHalfIcon sx={{ color: '#FFC633' }} />
              <Typography variant="body2" sx={{ ml: 1, color: '#000000', fontSize: '16px', lineHeight: '21.6px', fontWeight: '400' }}>4.5/5</Typography>
            </Box>
            <Typography variant="h5" sx={{ mt: 2, fontWeight: '700', fontSize: '32px', lineHeight: '43.2px', color: '#000000' }}>
              $260 
              <Typography component="span" variant="body2" sx={{ textDecoration: 'line-through', marginLeft: '10px', color: '#D3D3D3', fontWeight: '700', fontSize: '32px', lineHeight: '43.2px' }}>
                $300
              </Typography> 
              <Box component="span" sx={{ 
                display: 'inline-block',
                marginLeft: '10px', 
                padding: '5px 15px', 
                backgroundColor: '#FFE9F0', 
                borderRadius: '60px', 
                fontSize: '16px', 
                lineHeight: '21.6px', 
                fontWeight: '500',
                textAlign: 'center',
                verticalAlign: 'middle',
                color: '#FF3333'
              }}>
                -40%
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontSize: '16px', lineHeight: '22px', fontWeight: '400', color: 'grey' }}>
              This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
            </Typography>

            <Divider sx={{ mt: 3 }} />

            <Typography variant="body1" fontWeight="400" sx={{ mt: 2, fontSize: '16px', lineHeight: '21.6px', color: 'grey' }}>Select Colors</Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <Box
                sx={{
                  width: '37px',
                  height: '37px',
                  backgroundColor: '#4F4631',
                  borderRadius: '50%',
                  position: 'relative',
                  cursor: 'pointer',
                  ...(selectedColor === '#4F4631' && {})
                }}
                onClick={() => handleColorClick('#4F4631')}
              >
                {selectedColor === '#4F4631' && (
                  <CheckIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff' }} />
                )}
              </Box>
              <Box
                sx={{
                  width: '37px',
                  height: '37px',
                  backgroundColor: '#314F4A',
                  borderRadius: '50%',
                  position: 'relative',
                  cursor: 'pointer',
                  ...(selectedColor === '#314F4A' && {})
                }}
                onClick={() => handleColorClick('#314F4A')}
              >
                {selectedColor === '#314F4A' && (
                  <CheckIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff' }} />
                )}
              </Box>
              <Box
                sx={{
                  width: '37px',
                  height: '37px',
                  backgroundColor: '#31344F',
                  borderRadius: '50%',
                  position: 'relative',
                  cursor: 'pointer',
                  ...(selectedColor === '#31344F' && {})
                }}
                onClick={() => handleColorClick('#31344F')}
              >
                {selectedColor === '#31344F' && (
                  <CheckIcon sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#ffffff' }} />
                )}
              </Box>
            </Box>
            <Divider sx={{ mt: 3 }} />
            <Typography variant="body1" fontWeight="bold" sx={{ mt: 2, fontWeight: '400', fontSize: '16px', lineHeight: '21.6px', color: 'grey' }}>Choose Size</Typography>
            <Box>
              <MyButtons />
              <Divider sx={{ mt: 2 }} />
              <IncrementDecrementBox />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ mt: 5 }}>
          <ProductTabs />
        </Box>
      </Container>
      <SuggestedProducts />
      <Footer />
    </Box>
  );
};

export default ProductDetail;


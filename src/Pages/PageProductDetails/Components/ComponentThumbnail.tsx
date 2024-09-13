import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';

interface ProductThumbnailsProps {
  thumbnails: string[];
  selectedThumbnail: number | null;
  handleThumbnailClick: (index: number) => void;
}

const ProductThumbnails: React.FC<ProductThumbnailsProps> = ({ thumbnails, selectedThumbnail, handleThumbnailClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); 

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'row' : 'column',
        gap: 4,
        justifyContent: isMobile ? 'center' : 'flex-start',
        mt: isMobile ? 2 : 0,
      }}
    >
      {thumbnails.map((thumbnail, index) => (
        <Box
          key={index}
          sx={{
            width: '150px',
            height: '150px',
            cursor: 'pointer',
          }}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '20px',
              marginTop: '5px',
              marginRight: '50px',
              border: selectedThumbnail === index ? '1px solid black' : 'none',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProductThumbnails;

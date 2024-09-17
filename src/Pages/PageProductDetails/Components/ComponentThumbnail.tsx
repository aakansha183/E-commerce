import React from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { ProductThumbnailsProps } from '../Utils/Interfaces/InterfacesThumbnail';
import { thumbnailsContainerStyles, thumbnailBoxStyles, thumbnailImageStyles } from '../StyleProductDetails/StyleThumbnail';

const ProductThumbnails: React.FC<ProductThumbnailsProps> = ({ thumbnails, selectedThumbnail, handleThumbnailClick }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        ...thumbnailsContainerStyles,
        flexDirection: isMobile ? 'row' : 'column',
        justifyContent: isMobile ? 'center' : 'flex-start',
      }}
    >
      {thumbnails.map((thumbnail, index) => (
        <Box
          key={index}
          sx={thumbnailBoxStyles}
          onClick={() => handleThumbnailClick(index)}
        >
          <img
            src={thumbnail}
            alt={`Thumbnail ${index + 1}`}
            style={{
              ...thumbnailImageStyles,
              border: selectedThumbnail === index ? '1px solid black' : 'none',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ProductThumbnails;

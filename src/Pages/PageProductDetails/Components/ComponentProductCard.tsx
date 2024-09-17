import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Rating } from '@mui/material';
import { products } from '../Utils/Constants/ConstantsProductCard';
import Grid from "@mui/material/Grid2";

import {
  suggestedProductsContainer,
  titleStyles,
  productCardStyles,
  productImageStyles,
  productNameStyles,
  priceStyles,
  originalPriceStyles,
  discountStyles,
  ratingStyles,
  viewAllButtonStyles,
  viewAllTranslationstyles,
} from '../StyleProductDetails/StyleSuggestedProducts';
import { useCategoryNavigate, useProductNavigate } from '../../../Routes/Navigation';
import { Translations } from '../../../Utils/Translation/Translation';

const SuggestedProducts: React.FC = () => {
  const navigate = useNavigate();

  const renderStars = (rating: number) => (
    <Rating value={rating} precision={0.5} readOnly sx={{ color: '#FFC633' }} />
  );
  const { navigateToCategoryNavigate } = useCategoryNavigate();
  const { navigateToProductDetails } = useProductNavigate();

  return (
    <Box sx={suggestedProductsContainer}>
      <Typography variant="h4" sx={titleStyles}>
        YOU MIGHT ALSO LIKE
      </Typography>
      <Grid container spacing={7} justifyContent="center">
        {products.map((product) => (
          <Grid size = {{ xs:12, sm:6 ,md:3}} key={product.id}>
            <Box sx={productCardStyles}>
              <Box
                component="img"
                onClick={() => {
                  navigateToProductDetails(product); 
                }}
                src={product.image}
                alt={product.name}
                sx={productImageStyles}
              />
              <Typography sx={productNameStyles}>
                {product.name}
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, marginLeft: '10px' }}>
                {renderStars(product.rating)}
                <Typography variant="body2" sx={ratingStyles}>
                  {product.rating}/5
                </Typography>
              </Box>
              <Box sx={{ mt: 1, textAlign: 'left', marginLeft: '10px' }}>
                <Typography sx={priceStyles}>
                  ${product.price}
                  {product.originalPrice && (
                    <Typography component="span" sx={originalPriceStyles}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                {product.discount && (
                  <Typography sx={discountStyles}>
                    {product.discount}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={navigateToCategoryNavigate}
        sx={viewAllButtonStyles}
      >
        <Typography sx={viewAllTranslationstyles}>{Translations.ViewAll}</Typography>
      </Button>
    </Box>
  );
};

export default SuggestedProducts;

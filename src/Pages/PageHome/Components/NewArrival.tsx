import React from "react";
import { Box, Typography, Button } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { products } from "../Utils/Constants/NewArrivalConstants";
import {
  newArrivalBox,
  NewArrivalImage,
  newArrivalImageBox,
  newArrivalText,
  productPrice,
  productName,
  productRatingBox,
  productRatingText,
  discountBadge,
  viewAllButton,
  viewAllText,
} from "../StyleHome/StyleNewArrivals";
import { useCategoryNavigate, useProductNavigate } from "../../../Routes/Navigation";
import { Translations } from "../../../Utils/Translation/Translation";
import Grid from "@mui/material/Grid2";
import { typographyStyles } from "../StyleHome/StyleTopSelling";

const NewArrivals: React.FC = () => {
  const { navigateToCategoryNavigate } = useCategoryNavigate();
  const { navigateToProductDetails } = useProductNavigate();


  const renderStars = (rating: number) => {
    return (
      <>
        {[...Array(5)].map((_, index) => {
          const ratingValue = index + 1;
          if (rating >= ratingValue)
            return <StarIcon key={index} style={{ color: "#ffcc00" }} />;
          if (rating >= ratingValue - 0.5)
            return <StarHalfIcon key={index} style={{ color: "#ffcc00" }} />;
          return <StarOutlineIcon key={index} style={{ color: "#ffcc00" }} />;
        })}
      </>
    );
  };

  return (
    <Box id="newarrivals" sx={newArrivalBox}>
      <Typography variant="h4" sx={newArrivalText}>
       { Translations.NEW_ARRIVALS}
      </Typography>
      <Grid container spacing={4} justifyContent="center" wrap="wrap">
        {products.map((product) => (
          <Grid size = {{xs:12, sm:6, md:3}} key={product.id}>
            <Box sx={NewArrivalImage}>
              <Box
                component="img"
                onClick={() => {
                  navigateToProductDetails(product); 
                }}
                src={product.image}
                alt={product.name}
                sx={newArrivalImageBox}
              />
              <Typography variant="subtitle1" fontWeight="700" sx={productName}>
                {product.name}
              </Typography>
              <Box sx={productRatingBox}>
                {renderStars(product.rating)}
                <Typography variant="body2" sx={productRatingText}>
                  {product.rating}/5
                </Typography>
              </Box>
              <Box sx={{ mt: 1, textAlign: "left", marginLeft: "10px" }}>
                <Typography variant="h6" sx={productPrice}>
                  ${product.price}
                  {product.originalPrice && (
                    <Typography component="span" sx={typographyStyles.originalPrice}>
                      ${product.originalPrice}
                    </Typography>
                  )}
                </Typography>
                {product.discount && (
                  <Typography sx={discountBadge}>{product.discount}</Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="outlined"
        onClick={navigateToCategoryNavigate}
        sx={viewAllButton}
      >
        <Typography sx={viewAllText}>{Translations.ViewAll}</Typography>
      </Button>
    </Box>
  );
};

export default NewArrivals;

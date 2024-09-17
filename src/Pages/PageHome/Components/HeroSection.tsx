import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";
import HeroImage from "../../../Assests/Images/HeroImage.png";
import { useNavigate } from "react-router-dom";
import StarIcon from "../../../Assests/ImagesData/StarIcon";
import {
  heroSectionStyles,
  gridContainerStyles,
  titleStyles,
  subtitleStyles,
  buttonStyles,
  statsContainerStyles,
  statTitleStyles,
  statSubtitleStyles,
  starIconFirstStyles,
  starIconSecondStyles,
} from "../StyleHome/StyleHeroSection";
import { useCategoryNavigate } from "../../../Routes/Navigation";
import { Translations } from "../../../Utils/Translation/Translation";
import Grid from "@mui/material/Grid2"; 


const HeroSection: React.FC = () => {
  const { navigateToCategoryNavigate } = useCategoryNavigate();

  return (
    <Box sx={{ ...heroSectionStyles, backgroundImage: `url(${HeroImage})` }}>
      <Container>
        <Grid container justifyContent="flex-start" sx={gridContainerStyles}>
          <Grid size ={{ xs:12, md:6}}>
            <Typography variant="h2" component="h1" sx={titleStyles}>
                {Translations.HeroSectionHeading}
            </Typography>
            <Typography variant="subtitle1" sx={subtitleStyles}>
              {Translations.HeroSectionSubHeading}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={buttonStyles}
              onClick={navigateToCategoryNavigate}
            >
              {Translations.ShopNow}
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent="flex-start" spacing={5} sx={statsContainerStyles}>
          <Grid >
            <Typography variant="h6" sx={statTitleStyles}>
            {Translations.Count_InternationalBrands}
            </Typography>
            <Typography variant="body2" sx={statSubtitleStyles}>
              {Translations.INTERNATIONAL_BRANDS}
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="h6" sx={statTitleStyles}>
              {Translations.Count_InternationalBrands}
            </Typography>
            <Typography variant="body2" sx={statSubtitleStyles}>
            {Translations.HIGH_QUALITY_PRODUCTS}
            </Typography>
          </Grid>
          <Grid >
            <Typography variant="h6" sx={statTitleStyles}>
            {Translations.Count_HAPPY_CUSTOMERS}
            </Typography>
            <Typography variant="body2" sx={statSubtitleStyles}>
             {Translations.HAPPY_CUSTOMERS}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={starIconFirstStyles}>
          <StarIcon />
        </Box>
        <Box sx={starIconSecondStyles}>
          <StarIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

import React from "react";
import { Box, Button, Typography, Grid, Container } from "@mui/material";
import HeroImage from "../../../Assests/Images/HeroImage.png";
import { useNavigate } from "react-router-dom";
import StarIcon from "../../../Assests/ImagesData/StarIcon";

const HeroSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        marginTop: "10px",
        backgroundImage: `url(${HeroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#000",
        padding: "60px 0",
        width: "100%",
        height: { xs: "auto", md: "660px" },
      }}
    >
      <Container>
        <Grid
          container
          justifyContent="flex-start"
          sx={{
            marginLeft: { xs: "0", md: "-200px" }, 
            marginTop: { xs: "20px", md: "70px" }, 
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: "700",
                fontFamily: "Poppins",
                fontSize: { xs: "32px", md: "64px" }, 
                lineHeight: { xs: "40px", md: "64px" },
              }}
            >
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                marginTop: 2,
                marginBottom: 4,
                fontWeight: "400",
                fontSize: { xs: "14px", md: "16px" }, 
                lineHeight: { xs: "20px", md: "22px" }, 
                color: "grey",
              }}
            >
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "black",
                color: "white",
                padding: { xs: "12px 40px", md: "16px 54px" }, 
                width: { xs: "160px", md: "210px" },
                height: { xs: "40px", md: "52px" },
                borderRadius: "62px",
              }}
              onClick={() => {
                window.scrollTo(0, 0);
                navigate("/Category");
              }}
            >
              Shop Now
            </Button>
          </Grid>
        </Grid>

        <Grid
          container
          justifyContent="flex-start"
          spacing={5}
          sx={{
            marginTop: 1,
            marginLeft: { xs: 0, md: -28 },
            fontWeight: "700",
            fontSize: { xs: "24px", md: "40px" }, 
            lineHeight: { xs: "32px", md: "54px" }, 
          }}
        >
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "24px", md: "40px" }, 
                lineHeight: { xs: "32px", md: "54px" },
              }}
            >
              200+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: { xs: "12px", md: "15px" }, 
                lineHeight: { xs: "18px", md: "22px" }, 
                color: "grey",
                width: { xs: "auto", md: "141px" }, 
              }}
            >
              International Brands
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "24px", md: "40px" },
                lineHeight: { xs: "32px", md: "54px" },
              }}
            >
              2,000+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: { xs: "12px", md: "15px" },
                lineHeight: { xs: "18px", md: "22px" },
                color: "grey",
                width: { xs: "auto", md: "150px" },
              }}
            >
              High-Quality Products
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
                fontSize: { xs: "24px", md: "40px" },
                lineHeight: { xs: "32px", md: "54px" },
              }}
            >
              30,000+
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "400",
                fontSize: { xs: "12px", md: "15px" },
                lineHeight: { xs: "18px", md: "22px" },
                color: "grey",
                width: { xs: "auto", md: "141px" },
              }}
            >
              Happy Customers
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            marginLeft: { xs: "auto", md: "1200px" }, 
            marginTop: { xs: "50px", md: "-500px" }, 
          }}
        >
          <StarIcon />
        </Box>
        <Box
          sx={{
            marginLeft: { xs: "300px", md: "650px" }, 
            marginTop: { xs: "30px", md: "80px" }, 
          }}
        >
          <StarIcon />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;

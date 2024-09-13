import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import Casual from "../../../Assests/Images/Casual.png";
import Formal from "../../../Assests/Images/Formal.png";
import Party from "../../../Assests/Images/Party.png";
import Gym from "../../../Assests/Images/Gym.png";
import { useNavigate } from "react-router-dom";
import { styles } from "../StyleHome/HomeStyle";

const DressStyleComponent = () => {
  const navigate = useNavigate();

  return (
    <Box sx={styles.container}>
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        sx={{
          fontFamily: "Poppins",
          fontSize: { xs: "22px", md: "48px" },
          lineHeight: { xs: "38.4px", md: "57.6px" },
          marginTop: { xs: "20px", md: "40px" },
          marginBottom: { xs: "30px", md: "50px" },
        }}
      >
        BROWSE BY DRESS STYLE
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src={Casual}
              alt="Casual"
              style={{ ...styles.image ,marginBottom:'-130px'}}
              onClick={() => {
                navigate("/Category");
                window.scrollTo(0, 0);
              }}
              
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src={Formal}
              alt="Formal"
              style={{ ...styles.image }}
              onClick={() => {
                navigate("/Category");
                window.scrollTo(0, 0);
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src={Party}
              alt="Party"
              style={{ ...styles.image }}
              onClick={() => {
                navigate("/Category");
                window.scrollTo(0, 0);
              }}
            />
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              ...styles.gridItem,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
            }}
          >
            <img
              src={Gym}
              alt="Gym"
              style={{ ...styles.image,marginBottom:'-140px'  }}
              onClick={() => {
                navigate("/Category");
                window.scrollTo(0, 0);
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;

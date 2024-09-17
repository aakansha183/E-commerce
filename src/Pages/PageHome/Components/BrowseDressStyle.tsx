import React from "react";
import { Box, Typography } from "@mui/material";
import Casual from "../../../Assests/Images/Casual.png";
import Formal from "../../../Assests/Images/Formal.png";
import Party from "../../../Assests/Images/Party.png";
import Gym from "../../../Assests/Images/Gym.png";
import { useNavigate } from "react-router-dom";
import { styles, text } from "../StyleHome/HomeStyle";
import { useCategoryNavigate } from "../../../Routes/Navigation";
import { Translations } from "../../../Utils/Translation/Translation";
import Grid from "@mui/material/Grid2"; 


const DressStyleComponent = () => {
  const { navigateToCategoryNavigate } = useCategoryNavigate();

  return (
    <Box sx={styles.container}>
      <Typography
        variant="h4"
        fontWeight="700"
        align="center"
        sx={text}
      >
        {Translations.BROWSEBYDRESSSTYLE}
      </Typography>

      <Grid container spacing={2}>
        <Grid size = {{ xs:12, sm:6 }}>
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
              onClick={navigateToCategoryNavigate}
              
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
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
              onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
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
              onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>

        <Grid size = {{ xs:12, sm:6}}>
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
              onClick={navigateToCategoryNavigate}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DressStyleComponent;

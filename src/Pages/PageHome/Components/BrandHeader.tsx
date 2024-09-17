import React from "react";
import { Box } from "@mui/material";
import CKIcon from "../../../Assests/ImagesData/CKIcon";
import ParadaIcon from "../../../Assests/ImagesData/ParadaIcon";
import ZaraIcon from "../../../Assests/ImagesData/ZaraIcon";
import VarsacheIcon from "../../../Assests/ImagesData/VarsacheIcon";
import GucciIcon from "../../../Assests/ImagesData/GucciIcon";
import { brandBarStyles, iconBoxStyles } from "../StyleHome/StylesBrandBar";

const BrandBar: React.FC = () => {
  return (
    <Box sx={brandBarStyles}>
      <Box sx={{ ...iconBoxStyles, marginLeft: "-30px" }}>
        <VarsacheIcon />
      </Box>
      <Box sx={{ ...iconBoxStyles, marginLeft: "-40px" }}>
        <ZaraIcon />
      </Box>
      <Box sx={{ ...iconBoxStyles, marginLeft: "-180px" }}>
        <GucciIcon />
      </Box>
      <Box sx={{ ...iconBoxStyles, marginLeft: "-160px" }}>
        <ParadaIcon />
      </Box>
      <Box sx={{ ...iconBoxStyles, marginRight: "150px" }}>
        <CKIcon />
      </Box>
    </Box>
  );
};

export default BrandBar;

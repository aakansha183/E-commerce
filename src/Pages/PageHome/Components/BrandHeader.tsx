import React from "react";
import { Box } from "@mui/material";
import CKIcon from "../../../Assests/ImagesData/CKIcon";
import ParadaIcon from "../../../Assests/ImagesData/ParadaIcon";
import ZaraIcon from "../../../Assests/ImagesData/ZaraIcon";
import VarsacheIcon from "../../../Assests/ImagesData/VarsacheIcon";
import GucciIcon from "../../../Assests/ImagesData/GucciIcon";

const BrandBar: React.FC = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(1, 1fr)", 
          sm: "repeat(3, 1fr)", 
          md: "repeat(5, 1fr)", 
        },
        gap: { xs: 2, sm: 4 }, 
        justifyItems: "center", 
        alignItems: "center", 
        backgroundColor: "black",
        padding: { xs: "6px 0", sm: "10px 0" }, 
        height: { xs: "auto", sm: "100px" }, 
        overflow: "hidden",
        maxWidth: "100%",
        margin: "0 auto",
        marginTop:'-50px'
      }}
    >
      <Box sx={{ maxWidth: { xs: "40px", sm: "80px" }, width: "100%",marginLeft:'-30px' }}>
        <VarsacheIcon />
      </Box>
      <Box sx={{ maxWidth: { xs: "40px", sm: "80px" }, width: "100%",marginLeft:'-40px' }}>
        <ZaraIcon />
      </Box>
      <Box sx={{ maxWidth: { xs: "40px", sm: "80px" }, width: "100%",marginLeft:'-180px' }}>
        <GucciIcon />
      </Box>
      <Box sx={{ maxWidth: { xs: "40px", sm: "80px" }, width: "100%",marginLeft:'-160PX' }}>
        <ParadaIcon />
      </Box>
      <Box sx={{ maxWidth: { xs: "40px", sm: "80px" }, width: "100%",marginRight:'150px' }}>
        <CKIcon />
      </Box>
    </Box>
  );
};

export default BrandBar;

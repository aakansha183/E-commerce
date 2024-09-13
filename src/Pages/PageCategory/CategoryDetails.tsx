import React from "react";
import { Box, Divider, Grid } from "@mui/material";
import FilterComponent from "./Components/ComponentFilter";
import ProductGrid from "./Components/ComponentCategoryProductCrad";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import { FilterProvider } from "./Components/FilterContext";

const CategoryDetails: React.FC = () => {
  return (
    <Box sx={{ overflowX: 'hidden' }}>
      <TopHeader />
      <Header />

      <Divider 
        sx={{ 
          mt: 2, 
          width: { xs: '100%', md: '81%' }, 
          marginX: 'auto'
        }} 
      />

      <FilterProvider>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, 
          padding: { xs: 1, md: 2 }, 
          mt: 4, 
          mb: 18, 
          maxWidth: '100%', 
        }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FilterComponent /> 
            </Grid>
            <Grid item xs={12} md={9}>
              <ProductGrid />
            </Grid>
          </Grid>
        </Box>
      </FilterProvider>
      
      <Footer />
    </Box>
  );
};

export default CategoryDetails;

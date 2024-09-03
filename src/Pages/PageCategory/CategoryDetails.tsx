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
    <Box>
      <TopHeader />
      <Header />

      <Divider sx={{ mt: 2,width: '82%',marginLeft:'140px' }} />

      <FilterProvider>
        <Box sx={{ display: 'flex', paddingRight: 1, mt: 4, mb: 18 }}>
          <Grid container spacing={2}>
            <Grid item xs={9} sm={3}>
              <FilterComponent />
            </Grid>
            <Grid item xs={12} sm={9}>
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

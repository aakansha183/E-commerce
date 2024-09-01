import React from "react";
import { Box, Grid } from "@mui/material";
import FilterComponent from "./Components/Filter";
import ProductGrid from "./Components/CategoryProductCrad";

const CategoryDetails: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', padding: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3}>
          <FilterComponent />
        </Grid>
        <Grid item xs={12} sm={9}>
          <ProductGrid />
        </Grid>
      </Grid>
    </Box>
  );
};

export default CategoryDetails;

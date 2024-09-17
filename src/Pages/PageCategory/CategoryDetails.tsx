import React from "react";
import { Box, Divider } from "@mui/material";
import FilterComponent from "./Components/ComponentFilter";
import ProductGrid from "./Components/ComponentCategoryProductCrad";
import TopHeader from "../../CommonComponents/TopHeader";
import Header from "../../CommonComponents/Header";
import Footer from "../../CommonComponents/Footer";
import { FilterProvider } from "./Components/FilterContext";
import styles from "../PageCategory/StyleCategory/StyleCategory";
import Grid from "@mui/material/Grid2";

const CategoryDetails: React.FC = () => {
  return (
    <Box sx={styles.container}>
      <TopHeader />
      <Header />

      <Divider sx={styles.divider} />

      <FilterProvider>
        <Box sx={styles.filterWrapper}>
          <Grid container spacing={2}>
            <Grid size = {{ xs:12, md:3}}>
              <FilterComponent /> 
            </Grid>
            <Grid size = {{ xs:12, md:9}}>
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

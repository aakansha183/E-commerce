import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  Rating,
  Pagination,
  Divider,
} from "@mui/material";
import { useFilter } from "./FilterContext";
import products from "../Utils/ConstantsCategory";
import { useNavigate } from "react-router-dom";

const ProductGrid: React.FC = () => {
  const navigate = useNavigate();
  const { priceRange } = useFilter();

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <Box
      sx={{
        padding: 2,
        marginX: { xs: 1, sm: 2, md: 3 },
        overflowX: 'hidden', 
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: 2 }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", marginBottom: { xs: 2, sm: 1 } }}
        >
          Casual
        </Typography>
        <Box
          display="flex"
          flexDirection={{ xs: "column", sm: "row" }}
          alignItems="center"
          sx={{ marginBottom: { xs: 2, sm: 1 } }}
        >
          <Typography variant="body1" sx={{ color: "#808080" }}>
            Showing {filteredProducts.length} Products
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: { xs: 0, sm: 2 } }}>
            <Typography
              variant="body1"
              sx={{ color: "#808080", display: "inline" }}
            >
              Sort by:
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "#000000", display: "inline", ml: 1 }}
            >
              Most Popular
            </Typography>
          </Box>
        </Box>
      </Box>
      <Grid container spacing={2}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box
              sx={{
                marginTop: "30px",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                onClick={() => {
                  navigate("/ProductDetails", { state: { product } });
                  window.scrollTo(0, 0);
                }}
                src={product.image}
                alt={product.name}
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "20px",
                  marginBottom: 2,
                  objectFit: "cover",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "700",
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  lineHeight: "27px",
                }}
              >
                {product.name}
              </Typography>
              <Rating
                name="read-only"
                value={product.rating}
                precision={0.5}
                readOnly
                sx={{
                  fontSize: { xs: "1.2rem", sm: "1.4rem", md: "1.6rem" },
                  marginBottom: 1,
                  color: "#FFC633",
                  marginTop: 1,
                }}
              />
              <Box display="flex" alignItems="center" sx={{ marginBottom: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: "700",
                    fontSize: { xs: "18px", sm: "20px", md: "24px" },
                    lineHeight: "32.4px",
                  }}
                >
                  ${product.price}
                </Typography>
                {product.originalPrice && (
                  <>
                    <Typography
                      variant="body2"
                      sx={{
                        textDecoration: "line-through",
                        marginLeft: 1,
                        color: "#D3D3D3",
                        fontWeight: "700",
                        fontSize: { xs: "14px", sm: "16px", md: "20px" },
                        lineHeight: "32.4px",
                      }}
                    >
                      ${product.originalPrice}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        backgroundColor: "#FFE9F0",
                        color: "#FF3333",
                        borderRadius: "62px",
                        padding: "6px 14px",
                        marginLeft: 0.5,
                      }}
                    >
                      {product.discount}
                    </Typography>
                  </>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Divider sx={{ marginY: 3, width: { xs: '100%', sm: 'auto' } }} />
      <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ mt: 2 }}>
        <Button
          variant="outlined"
          sx={{ color: "black", borderColor: "black", fontSize: "bold" }}
        >
          Previous
        </Button>
        <Pagination count={10} shape="rounded" />
        <Button
          variant="outlined"
          sx={{ color: "black", borderColor: "black" }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default ProductGrid;

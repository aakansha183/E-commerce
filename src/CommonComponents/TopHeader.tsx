import { Box, Container, Typography } from "@mui/material";

const TopHeader: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "#000000", height: "38px", width: "100%" }}>
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontsize: "14px",
            fontFamily: "sans-serif",
          }}
        >
          Sign up and get 20% off to your first order.Sign Up Now{" "}
        </Typography>
      </Container>
    </Box>
  );
};

export default TopHeader;

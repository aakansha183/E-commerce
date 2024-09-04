import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
            fontSize: "14px",
            fontFamily: "sans-serif",
          }}
        >
          Sign up and get 20% off your first order.{" "}
          <Link
            to="/register"
            style={{
              color: "#ffffff",
              textDecoration: "underline",
              
            }}
          >
            Sign Up Now
          </Link>
        </Typography>
      </Container>
    </Box>
  );
};

export default TopHeader;

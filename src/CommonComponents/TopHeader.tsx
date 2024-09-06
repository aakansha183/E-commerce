import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close"; 
import useAuth from "../Hooks/UseAuth"; 

const TopHeader: React.FC = () => {
  const { currentUser } = useAuth(); 
  const [isVisible, setIsVisible] = useState(true); 

  const handleClose = () => {
    setIsVisible(false); 
  };

  if (currentUser || !isVisible) return null;

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
          position: "relative", 
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
        <IconButton
          sx={{
            position: "absolute",
            right: "16px", 
            color: "#ffffff",
          }}
          onClick={handleClose} 
        >
          <CloseIcon />
        </IconButton>
      </Container>
    </Box>
  );
};

export default TopHeader;

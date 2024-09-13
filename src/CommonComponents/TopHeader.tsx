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
    <Box
      sx={{
        backgroundColor: "#000000",
        height: "38px",
        width: "100%",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        zIndex: 9999
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#ffffff",
          px: { xs: 2, sm: 3, md: 4 },
          textAlign: 'center'
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: { xs: "12px", sm: "14px", md: "16px" },
            fontFamily: "sans-serif",
            textAlign: "center",
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
            right: { xs: "8px", sm: "16px" },
            top: { xs: "4px", sm: "8px" },
            color: "#ffffff",
            width: { xs: "24px", sm: "28px", md: "32px" }, 
            height: { xs: "24px", sm: "28px", md: "32px" }, 
            padding: 0, 
            
          }}
          onClick={handleClose}
        >
          <CloseIcon
            sx={{
              fontSize: { xs: "16px", sm: "20px", md: "24px" }, 
            }}
          />
        </IconButton>
      </Container>
    </Box>
  );
};

export default TopHeader;

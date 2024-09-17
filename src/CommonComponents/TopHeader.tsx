import React, { useState } from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import useAuth from "../Hooks/UseAuth";
import { topHeaderContainer, containerStyle, typographyStyle, iconButtonStyle, closeIconStyle } from "../CommonComponents/StyleCommonComponents/StyleTopHeder";
import { Translations } from "../Utils/Translation/Translation";

const TopHeader: React.FC = () => {
  const { currentUser } = useAuth();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (currentUser || !isVisible) return null;

  return (
    <Box sx={topHeaderContainer}>
      <Container
        maxWidth={false}
        sx={containerStyle}
      >
        <Typography
          variant="body2"
          sx={typographyStyle}
        >
          {Translations.TopHeaderSubHead}{" "}
          <Link
            to="/register"
            style={{
              color: "#ffffff",
              textDecoration: "underline",
            }}
          >
           {Translations.SignUpNow}
          </Link>
        </Typography>
        <IconButton
          sx={iconButtonStyle}
          onClick={handleClose}
        >
          <CloseIcon
            sx={closeIconStyle}
          />
        </IconButton>
      </Container>
    </Box>
  );
};

export default TopHeader;

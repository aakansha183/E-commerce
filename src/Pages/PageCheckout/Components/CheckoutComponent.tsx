import React from "react";
import { Box, Divider, Typography, Button } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../../CommonComponents/TopHeader";
import Header from "../../../CommonComponents/Header";
import Footer from "../../../CommonComponents/Footer";
import CelebAnimation from "../../../Assests/ImagesData/Celeb.json";
import checkoutAnimation from "../../../Assests/ImagesData/Checkout.json";
import styles from "../StyleCheckout/StyleCheckoutComponent";
import { Translations } from "../../../Utils/Translation/Translation";

const Checkout: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <TopHeader />
      <Header />
      <Divider sx={styles.divider} />
      <Box sx={styles.container}>
        <Box sx={styles.headingBox}>
          <Typography sx={styles.headingText}>
            {Translations.Hurry}
          </Typography>

          <Player
            src={CelebAnimation}
            style={{
              width: "100%", 
              maxWidth: "400px", 
              height: "300px",
              position: "absolute",
              top: "-50px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 0,
            }}
            loop
            autoplay
          />
        </Box>

        <Typography sx={styles.messageText}>
          {Translations.CheckoutSubHead}
        </Typography>

        <Player
          src={checkoutAnimation}
          style={{
            width: "100%", 
            maxWidth: "400px", 
            height: "300px",
            marginBottom: "-28px",
          }}
          loop
          autoplay
        />

        <Button
          variant="contained"
          color="primary"
          sx={styles.button}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/Category");
          }}
        >
          Shop Now
        </Button>
      </Box>

      <Box sx={styles.footerBox}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Checkout;

import { Box, Button, Divider, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../../CommonComponents/TopHeader";
import Header from "../../../CommonComponents/Header";
import Footer from "../../../CommonComponents/Footer";
import CelebAnimation from "../../../Assests/ImagesData/Celeb.json";
import checkoutAnimation from "../../../Assests/ImagesData/Checkout.json";

const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <TopHeader />
      <Header />
      <Divider
        sx={{
          mt: "20px",
          width: { xs: "90%", md: "86%" }, // Adjust width based on screen size
          marginLeft: { xs: "5%", md: "120px" }, // Center on small screens, fixed on larger screens
        }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            position: "relative",
            marginTop: { xs: "40px", md: "90px" }, // Adjust margin for smaller screens
            marginBottom: "30px",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: { xs: "24px", md: "34px" }, // Smaller font on mobile
              lineHeight: "22px",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            Hurryyyyyyyy !!
          </Typography>

          <Player
            src={CelebAnimation}
            style={{
              width: "100%", // Responsive width
              maxWidth: "400px", // Limit the width on large screens
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

        <Typography
          color="textSecondary"
          sx={{
            fontFamily: "Poppins",
            fontSize: { xs: "20px", md: "30px" }, // Adjust text size
            fontWeight: "500",
          }}
        >
          Your Order has been successfully Checked Out!
        </Typography>

        <Player
          src={checkoutAnimation}
          style={{
            width: "100%", // Responsive width
            maxWidth: "400px", // Limit width for larger screens
            height: "300px",
            marginBottom: "-28px",
          }}
          loop
          autoplay
        />

        <Button
          variant="contained"
          color="primary"
          sx={{
            backgroundColor: "black",
            color: "white",
            padding: "16px 54px",
            width: { xs: "80%", md: "310px" }, // Full width on mobile, fixed on larger screens
            height: "52px",
            borderRadius: "62px",
            marginTop: "-41px",
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/Category");
          }}
        >
          Shop Now
        </Button>
      </Box>

      <Box sx={{ marginTop: "120px" }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Checkout;

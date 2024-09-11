import { Box, Button, Divider, Typography } from "@mui/material";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../../CommonComponents/TopHeader";
import Header from "../../../CommonComponents/Header";
import Footer from "../../../CommonComponents/Footer";
import CelebAnimation from "../../../Assests/ImagesData/Celeb.json"
import checkoutAnimation from "../../../Assests/ImagesData/Checkout.json"
const Checkout = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <TopHeader />
      <Header />
      <Divider sx={{ mt: "20px", width: "86%", marginLeft: "120px" }} />
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative', marginTop: "90px", marginBottom: "30px" }}>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "700",
              fontSize: "34px",
              lineHeight: "22px",
              textAlign: "center",
              zIndex: 1 
            }}
          >
            Hurryyyyyyyy !!
          </Typography>
      
          <Player
            src={CelebAnimation}
            style={{ width: "400px", height: "300px", position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', zIndex: 0 }}
            loop
            autoplay
          />
        </Box>

        <Typography color="textSecondary" sx={{ fontFamily: 'Poppins', fontSize: '30px', fontWeight: '500' }}>
          Your Order has been successfully Checked Out!
        </Typography>

        <Player
          src={checkoutAnimation}
          style={{ width: "400px", height: "300px", marginBottom: '-28px' }}
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
            width: "310px",
            height: "52px",
            borderRadius: "62px",
            marginTop: '-41px'
          }}
          onClick={() => {
            window.scrollTo(0, 0);
            navigate("/Category");
          }}
        >
          Shop Now
        </Button>
      </Box>

      <Box sx={{ marginTop: '120px' }}>
        <Footer />
      </Box>
    </Box>
  );
};

export default Checkout;

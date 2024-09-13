import React, { useRef } from "react";
import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { testimonials } from "../Utils/Constants/TestimonialsConstants";

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: -400, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        maxWidth: "100%",
        margin: "0 auto",
        overflow: "hidden",
        marginBottom: "120px",
        padding: { xs: "0 20px", md: "0 40px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 2,
          padding: { xs: "0 10px", md: "0 40px" },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "24px", sm: "36px", md: "48px" },
            lineHeight: { xs: "32px", sm: "42px", md: "57.6px" },
            fontFamily: "Poppins",
            marginBottom: { xs: "20px", md: "40px" },
          }}
        >
          OUR HAPPY CUSTOMERS
        </Typography>

        <Box
          sx={{
            display: "flex",
            marginRight: { xs: "0px", sm: "10px", md: "30px" },
            height: { xs: "25px", sm: "30px" },
          }}
        >
          <IconButton
            onClick={scrollLeft}
            sx={{
              padding: { xs: "5px", sm: "10px" },
              "& svg": {
                fontSize: { xs: "16px", sm: "24px" },
              },
            }}
          >
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton
            onClick={scrollRight}
            sx={{
              padding: { xs: "5px", sm: "10px" },
              "& svg": {
                fontSize: { xs: "16px", sm: "24px" },
              },
            }}
          >
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>

      <Box
        ref={testimonialsRef}
        sx={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          gap: 3,
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
        }}
      >
        {[...testimonials].map((testimonial, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: "90%", sm: "70%", md: "500px" },
              height: { xs: "auto", md: "240px" },
              minHeight: "240px", 
              flexShrink: 0,
              borderRadius: "20px",
              transition: "all 0.3s ease",
              border: "solid 1px #dee2e6",
              boxShadow: 0,
              scrollSnapAlign: "start",
            }}
          >
            <CardContent sx={{ height: "100%" }}> 
              <Box sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: "#FFCC00" }} />
                ))}
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  fontWeight: "bold",
                  marginBottom: 1,
                  fontSize: { xs: "16px", md: "20px" },
                }}
              >
                {testimonial.name}
                <CheckCircleIcon sx={{ color: "#00C853", marginLeft: 1 }} />
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  fontSize: { xs: "14px", md: "16px" },
                }}
              >
                "{testimonial.text}"
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Testimonials;

import React, { useRef } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const testimonials = [
  {
    name: 'Sarah M.',
    text: 'I\'m blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I\'ve bought has exceeded my expectations.',
  },
  {
    name: 'Alex K.',
    text: 'Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.',
  },
  {
    name: 'James L.',
    text: 'As someone who\'s always on the lookout for unique fashion pieces, I\'m thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.',
  },
  {
    name: 'Mona R.',
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."
  },
  {
    name: 'Liam N.',
    text: 'I was skeptical about shopping online for clothes, but Shop.co has completely changed my mind. Their products are top-notch, and their service is exceptional.',
  }
];

const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      // Scroll to the start to show the first card fully
      testimonialsRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: '0 auto', overflow: 'hidden' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: 'bold' }}>
          OUR HAPPY CUSTOMERS
        </Typography>
        <Box>
          <IconButton onClick={scrollLeft}>
            <ArrowBackIosNewIcon />
          </IconButton>
          <IconButton onClick={scrollRight}>
            <ArrowForwardIosIcon />
          </IconButton>
        </Box>
      </Box>
      <Box 
        ref={testimonialsRef}
        sx={{ 
          display: 'flex', 
          alignItems: 'center',
          position: 'relative',
          overflowX: 'hidden', 
          gap: 3,
        }}
      >
        {/* First Card (blurred and half-shown) */}
        <Card 
          sx={{ 
            width: '400px',
            height:'240px',
            flexShrink: 0,
            borderRadius: '16px', 
            boxShadow: 3, 
            transition: 'all 0.3s ease',
            transform: 'scale(0.9)',
            opacity: 0.5,
            filter: 'blur(3px)',
            marginLeft: '-130px' 
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#FFCC00' }} />
              ))}
            </Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {testimonials[0].name}
              <CheckCircleIcon sx={{ color: '#00C853', marginLeft: 1 }} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "{testimonials[0].text}"
            </Typography>
          </CardContent>
        </Card>

        {[1, 2, 3].map(index => (
          <Card 
            key={index} 
            sx={{ 
              width:'400px',
              height:'240px', 
              flexShrink: 0,
              borderRadius: '16px', 
              boxShadow: 3, 
              transition: 'all 0.3s ease',
            }}
          >
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} sx={{ color: '#FFCC00' }} />
                ))}
              </Box>
              <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                {testimonials[index].name}
                <CheckCircleIcon sx={{ color: '#00C853', marginLeft: 1 }} />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                "{testimonials[index].text}"
              </Typography>
            </CardContent>
          </Card>
        ))}

        <Card 
          sx={{ 
            width:'400px',
            height:'240px',
            flexShrink: 0,
            borderRadius: '16px', 
            boxShadow: 3, 
            transition: 'all 0.3s ease',
            transform: 'scale(0.9)',
            opacity: 0.5,
            filter: 'blur(3px)',
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#FFCC00' }} />
              ))}
            </Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
              {testimonials[4].name}
              <CheckCircleIcon sx={{ color: '#00C853', marginLeft: 1 }} />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              "{testimonials[4].text}"
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Testimonials;

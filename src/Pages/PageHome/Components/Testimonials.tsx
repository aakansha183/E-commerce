import React, { useRef } from 'react';
import { Box, Typography, Card, CardContent, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { testimonials } from '../Utils/Constants/TestimonialsConstants';


const Testimonials: React.FC = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <Box sx={{ maxWidth: '100%', margin: '0 auto', overflow: 'hidden',marginBottom:'120px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
        <Typography variant="h4" component="h2" sx={{ fontWeight: '700',fontSize:'48px',lineHeight:'57.6px',marginLeft:'140px',fontFamily:'Poppins',marginBottom:'40px' }}>
          OUR HAPPY CUSTOMERS
        </Typography>
        <Box sx = {{marginRight:'30px',height:'30px'}}>
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
        <Card                                                               
          sx={{ 
            width: '500px',
            height:'240px',
            flexShrink: 0,
            borderRadius: '16px', 
            boxShadow: 3, 
            transition: 'all 0.3s ease',
            transform: 'scale(0.9)',
            filter: 'blur(3px)',
            marginLeft: '-380px' 
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
              width:'500px',
              height:'240px', 
              flexShrink: 0,
              borderRadius: '20px', 
              transition: 'all 0.3s ease',
             border:'solid 1px #C8C8C8',
              
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
            width:'500px',
            height:'240px',
            flexShrink: 0,
            borderRadius: '16px', 
            transition: 'all 0.3s ease',
            transform: 'scale(0.9)',
            filter: 'blur(3px)',
          }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} sx={{ color: '#FFCC00' }} />
              ))}
            </Box>
            <Typography variant="h6" component="div" sx={{ fontWeight: '700', marginBottom: 1,fontSize:'20px',lineHeight:'22px' }}>
              {testimonials[4].name}
              <CheckCircleIcon sx={{ color: '#00C853', marginLeft: 1 }} />
            </Typography>
            <Typography variant="body2" color="text.secondary" sx= {{fontWeight:'400',fontSize:'16px',lineHeight:'22px'}}>
              "{testimonials[4].text}"
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Testimonials;

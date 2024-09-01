import React from 'react';
import { Card, CardContent, Typography, Avatar, Grid, Rating, Box, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Samantha D.',
    rating: 4.5,
    date: 'August 14, 2023',
    review: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
  },
  {
    id: 2,
    name: 'Alex M.',
    rating: 4,
    date: 'August 15, 2023',
    review: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
  },
  {
    id: 3,
    name: 'Ethan R.',
    rating: 4.5,
    date: 'August 16, 2023',
    review: "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
  },
  {
    id: 4,
    name: 'Olivia P.',
    rating: 5,
    date: 'August 17, 2023',
    review: "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
  },
  {
    id: 5,
    name: 'Liam K.',
    rating: 5,
    date: 'August 18, 2023',
    review: "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion.",
  },
  {
    id: 6,
    name: 'Ava H.',
    rating: 4.5,
    date: 'August 19, 2023',
    review: "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
  },
];

const ReviewCard: React.FC<Review> = ({ name, rating, date, review }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, width: '600px', height: '240px', borderRadius: '20px', padding: '20px' }}>
      <CardContent>
        <Box display="flex" flexDirection="column" justifyContent="space-between" height="100%">
          <Box display="flex" alignItems="center" marginBottom={1}>
            <Rating
              value={rating}
              precision={0.5}
              readOnly
              sx={{ color: '#FFC633' }} 
            />
          </Box>
          <Box display="flex" alignItems="center" marginBottom={2}>
            <Typography variant="h6" sx={{ marginRight: 1 }}>
              {name}
            </Typography>
            <CheckCircle sx={{ color: 'green' }} />
          </Box>
          <Typography variant="body1" gutterBottom sx={{ flexGrow: 1 }}>
            {review}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {`Posted on ${date}`}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const ReviewsList: React.FC = () => {
  return (
    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        {reviews.map((review) => (
          <Grid item key={review.id}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
      <Box display="flex" justifyContent="center" marginTop={2}>
        <Button variant="outlined">Load More Reviews</Button>
      </Box>
    </Box>
  );
};

export default ReviewsList;

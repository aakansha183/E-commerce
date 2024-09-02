import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Rating, Box, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface Review {
  id: number;
  name: string;
  rating: number;
  date: string;
  review: string;
}

interface ReviewsListProps {
  reviews: Review[];
}

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

const ReviewsList: React.FC<ReviewsListProps> = ({ reviews }) => {
  const [visibleCount, setVisibleCount] = useState(6);

  // Sort reviews by date in descending order (latest first)
  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  // Function to handle "Load More Reviews" button click
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Grid container spacing={3} justifyContent="center">
        {sortedReviews.slice(0, visibleCount).map((review) => (
          <Grid item key={review.id}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < sortedReviews.length && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button variant="outlined" onClick={handleLoadMore}>
            Load More Reviews
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default ReviewsList;


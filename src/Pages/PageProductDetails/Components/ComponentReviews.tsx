import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, Rating, Box, Button } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';
import { Review } from '../../../Utils/Interfaces/InterfaceReview';

interface ReviewsListProps {
  reviews: Review[];
}

const ReviewCard: React.FC<Review> = ({ name, rating, date, review }) => {
  return (
    <Card variant="outlined" sx={{ marginBottom: 2, width: '640px', height: '240px', borderRadius: '20px', padding: '20px',marginLeft:'-55px' }}>
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

  const sortedReviews = reviews.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  return (
    <Box sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center',gap:3}}>
      <Grid container spacing={1} justifyContent="center">
        {sortedReviews.slice(0, visibleCount).map((review) => (
          <Grid item key={review.id} xs={12} md={6}>
            <ReviewCard {...review} />
          </Grid>
        ))}
      </Grid>
      {visibleCount < sortedReviews.length && (
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Button variant="outlined" sx={{ width: '250px', height: '52px', borderRadius: '62px', borderColor: '#D3D3D3' }} onClick={handleLoadMore}>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', lineHeight: '21.6px', color: '#000000', fontFamily: 'Poppins' }}>Load More Reviews</Typography>
          </Button>
        </Box>
      )}
    </Box>
  );
};
export default ReviewsList;



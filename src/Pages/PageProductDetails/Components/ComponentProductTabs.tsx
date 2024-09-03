
import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
  Menu,
  MenuItem,
  TextField,
  Rating,
} from '@mui/material';
import FilterIcon from '../../../Assests/ImagesData/FilterIcon';
import ReviewsList from './ComponentReviews';
import { Review, TabPanelProps } from '../Utils/Interfaces';

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const ProductTabs: React.FC = () => {
  const [value, setValue] = useState(1);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([
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
  ]);

  const [newReview, setNewReview] = useState<Review>({
    id: reviews.length + 1,
    name: '',
    rating: 0,
    date: '',
    review: '',
  });

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleWriteReviewClick = () => {
    setReviewOpen(true);
  };

  const handleReviewClose = () => {
    setReviewOpen(false);
  };

  const handleReviewSubmit = () => {
    const currentDate = new Date().toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    
    const updatedReviews = [
      ...reviews,
      { ...newReview, date: currentDate, id: reviews.length + 1 },
    ];

    setReviews(updatedReviews);
    setNewReview({ id: 0, name: '', rating: 0, date: '', review: '' });
    setReviewOpen(false);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered
        sx={{
          borderBottom: '1px solid #E0E0E0',
          '& .MuiTab-root': {
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: '400',
            color: '#757575',
          },
          '& .Mui-selected': {
            color: '#000000',
            fontWeight: '500',
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#000000',
          },
        }}
      >
        <Tab label="Product Details" />
        <Tab label="Rating & Reviews" />
        <Tab label="FAQs" />
      </Tabs>
      <TabPanel value={value} index={0}>
      
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          mb={2}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              fontSize: '18px',
              color: '#000000',
            }}
          >
            All Reviews ({reviews.length})
          </Typography>
          <Box display="flex" alignItems="center">
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleMenuClick}
              startIcon={<FilterIcon />}
              sx={{
                textTransform: 'none',
                backgroundColor: '#F5F5F5',
                color: '#757575',
                borderRadius: '20px',
                padding: '6px 16px',
                marginRight: '8px',
              }}
            >
              Latest
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>Latest</MenuItem>
              <MenuItem onClick={handleMenuClose}>Oldest</MenuItem>
            </Menu>
            <Button
              variant="contained"
              onClick={handleWriteReviewClick}
              sx={{
                textTransform: 'none',
                backgroundColor: '#000000',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '6px 16px',
              }}
            >
              Write a Review
            </Button>
          </Box>
        </Box>

        {reviewOpen && (
          <Box
            sx={{
              p: 3,
              border: '1px solid #E0E0E0',
              borderRadius: '8px',
              mt: 2,
              backgroundColor: '#FAFAFA',
              mb: 2,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 'bold',
                fontSize: '18px',
                color: '#000000',
              }}
            >
              Write a Review
            </Typography>
            <Box component="form">
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                margin="normal"
                value={newReview.name}
                onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
              />
              <Box mb={2}>
                <Typography variant="body1" sx={{ color: '#757575' }}>
                  Your Rating
                </Typography>
                <Rating
                  value={newReview.rating}
                  onChange={(e, newValue) => setNewReview({ ...newReview, rating: newValue || 0 })}
                />
              </Box>
              <Box mb={2}>
                <Typography variant="body1" sx={{ color: '#757575' }}>
                  Your Review
                </Typography>
                <textarea
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #E0E0E0',
                    fontSize: '14px',
                  }}
                  value={newReview.review}
                  onChange={(e) => setNewReview({ ...newReview, review: e.target.value })}
                />
              </Box>
              <Button
                variant="contained"
                onClick={handleReviewSubmit}
                sx={{
                  textTransform: 'none',
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  padding: '6px 16px',
                }}
              >
                Submit Review
              </Button>
            </Box>
          </Box>
        )}

        {value === 1 && <ReviewsList reviews={reviews} />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        
      </TabPanel>
    </Box>
  );
};

export default ProductTabs;

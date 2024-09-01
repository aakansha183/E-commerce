import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Button,
  Typography,
  Box,
  Menu,
  MenuItem,
} from '@mui/material';
import FilterIcon from '../../../Assests/ImagesData/FilterIcon';
import ReviewsList from './Reviews';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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
        Product Details Content
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
            All Reviews (451)
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
                />
              </Box>
              <Button
                variant="contained"
                onClick={handleReviewClose}
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

        {value === 1 && <ReviewsList />}
      </TabPanel>
      <TabPanel value={value} index={2}>
        FAQs Content
      </TabPanel>
    </Box>
  );
};

export default ProductTabs;

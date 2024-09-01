import React from 'react';
import { Box, Grid, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Email, Twitter, Facebook, Instagram, GitHub } from '@mui/icons-material';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '40px 20px', borderRadius: '0 0 20px 20px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6} textAlign="center">
            <Typography variant="h4" fontWeight="bold">
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Box display="flex" justifyContent="center">
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                sx={{ bgcolor: '#fff', borderRadius: '30px', marginRight: 2, maxWidth: 350 }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <Button variant="contained" color="primary" sx={{ borderRadius: '30px', bgcolor: '#fff', color: '#000', padding: '10px 30px', fontWeight: 'bold' }}>
                Subscribe to Newsletter
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4} justifyContent="center" sx={{ padding: '40px 20px' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold">
            SHOP.CO
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 2 }}>
            <Twitter sx={{ color: '#000', marginRight: 1 }} />
            <Facebook sx={{ color: '#000', marginRight: 1 }} />
            <Instagram sx={{ color: '#000', marginRight: 1 }} />
            <GitHub sx={{ color: '#000' }} />
          </Box>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            COMPANY
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            About
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Features
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Works
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Career
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            HELP
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            Customer Support
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Delivery Details
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Terms & Conditions
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Privacy Policy
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="bold">
            FAQ
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            Account
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Manage Deliveries
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Orders
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Payments
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="bold">
            RESOURCES
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 1 }}>
            Free eBooks
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Development Tutorial
          </Typography>
          <Typography variant="body2" color="textSecondary">
            How to - Blog
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Youtube Playlist
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: 'center', padding: '20px 0', borderTop: '1px solid #e0e0e0' }}>
        <Typography variant="body2" color="textSecondary">
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 2 }}>
          <img src="visa.png" alt="Visa" style={{ marginRight: 10 }} />
          <img src="mastercard.png" alt="Mastercard" style={{ marginRight: 10 }} />
          <img src="paypal.png" alt="Paypal" style={{ marginRight: 10 }} />
          <img src="applepay.png" alt="Apple Pay" style={{ marginRight: 10 }} />
          <img src="gpay.png" alt="Google Pay" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

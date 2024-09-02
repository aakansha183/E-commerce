import React from 'react';
import { Box, Grid, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Email, Twitter, Facebook, Instagram, GitHub } from '@mui/icons-material';
import VisaIcon from '../Assests/ImagesData/VisaIcon';
import Mastercard from '../Assests/ImagesData/MasterCardIcon';
import IphonePay from '../Assests/ImagesData/IPhonePayIcon';
import GpayIcon from '../Assests/ImagesData/GPayIcon';
import PayPalIcon from '../Assests/ImagesData/PayPal';
import FacebookIcon from '../Assests/ImagesData/FacebookIcon';
import GithubIcon from '../Assests/ImagesData/GithubIcon';
import InstaIcon from '../Assests/ImagesData/InstaIcon';
import TwitterIcon from '../Assests/ImagesData/TwitterIcon';

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
      <Box sx={{ backgroundColor: '#000000', color: '#fff', padding: '36px 64px 36px 64px', borderRadius: '20px',width:'1380px',height:'100px',marginLeft: '190px',marginTop:'-130px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="700" fontSize={'40px'} lineHeight={'45px'} width={'551px'} height={'94px'}>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Box display="flex" >
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

      <Grid container spacing={4} justifyContent="center" sx={{ padding: '40px 200px' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="700" fontSize={'33.45px'} width={'167px'} height={'23px'} lineHeight = {'40.15px'}>
            SHOP.CO
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3,fontWeight:'400',fontSize:'14px',lineHeight:'22px',width:'248px',height:'66px' }}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 5 ,gap :2}}>

          <a href="https://x.com/?lang=en" target = "_blank" > <TwitterIcon/></a>
          <a href="https://www.facebook.com/" target="_blank">
      <FacebookIcon />
    </a>
             <a href="https://www.instagram.com/" target = "_blank" > <InstaIcon/></a>
           <a href=" https://github.com/" target = "_blank" > <GithubIcon/></a>
            
          </Box>
        </Grid>

        <Grid item xs={15} sm={2}>
          <Typography variant="h6" fontWeight="500" fontSize={'16px'} lineHeight={'18px'} letterSpacing={"3px"} marginTop={2} >
            COMPANY
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            About
           
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Features
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Works
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
          Career
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="500" fontSize={'16px'} lineHeight={'18px'} letterSpacing={"3px"} marginTop={2}>
            HELP
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Customer Support
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Delivery Details
          </Typography>
          <Typography variant="body2" color="textSecondary"sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Terms & Conditions
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}> 
            Privacy Policy
          </Typography>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="h6" fontWeight="500" fontSize={'16px'} lineHeight={'18px'} letterSpacing={"3px"} marginTop={2}>
            FAQ
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Account
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Manage Deliveries
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Orders
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Payments
          </Typography>
        </Grid>

        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="500" fontSize={'16px'} lineHeight={'18px'} letterSpacing={"3px"} marginTop={2}>
            RESOURCES
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Free eBooks
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Development Tutorial
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            How to - Blog
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize:'16px',fontWeight:'400',lineHeight:'19px'}}>
            Youtube Playlist
          </Typography>
        </Grid>
      </Grid>
      <Box sx={{  padding: '15px 0', borderTop: '1px solid #e0e0e0'}}>
        <Typography variant="body2" color="textSecondary" marginLeft={'200px'} marginTop = {'20px'} >
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
        
      </Box>
      <Box sx={{ display: 'flex',justifyContent:'right',marginRight:'50px',marginTop:'-30px'}}>
         <a href='https://www.visa.co.in/' target='_blank'><VisaIcon/></a>
         <a href='https://www.mastercard.co.in/en-in.html/' target='_blank'><Mastercard/></a>
         <a href='https://www.paypal.com/in/home' target='_blank'><PayPalIcon/></a>
         <a href='https://www.apple.com/apple-pay/' target='_blank'><IphonePay/></a>
         <a href='https://payments.google.com/gp/w/u/0/home/signup' target='_blank'><GpayIcon/></a>
         
          
        </Box>
    </Box>
  );
};

export default Footer;

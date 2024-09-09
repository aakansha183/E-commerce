import React from 'react';
import { Box, Grid, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Email } from '@mui/icons-material';
import VisaIcon from '../Assests/ImagesData/VisaIcon';
import Mastercard from '../Assests/ImagesData/MasterCardIcon';
import IphonePay from '../Assests/ImagesData/IPhonePayIcon';
import GpayIcon from '../Assests/ImagesData/GPayIcon';
import PayPalIcon from '../Assests/ImagesData/PayPal';
import FacebookIcon from '../Assests/ImagesData/FacebookIcon';
import GithubIcon from '../Assests/ImagesData/GithubIcon';
import InstaIcon from '../Assests/ImagesData/InstaIcon';
import TwitterIcon from '../Assests/ImagesData/TwitterIcon';

const socialIcons = [
  { icon: <TwitterIcon />, link: 'https://x.com/?lang=en' },
  { icon: <FacebookIcon />, link: 'https://www.facebook.com/' },
  { icon: <InstaIcon />, link: 'https://www.instagram.com/' },
  { icon: <GithubIcon />, link: 'https://github.com/' }
];

const paymentIcons = [
  { icon: <VisaIcon />, link: 'https://www.visa.co.in/' },
  { icon: <Mastercard />, link: 'https://www.mastercard.co.in/en-in.html/' },
  { icon: <PayPalIcon />, link: 'https://www.paypal.com/in/home' },
  { icon: <IphonePay />, link: 'https://www.apple.com/apple-pay/' },
  { icon: <GpayIcon />, link: 'https://payments.google.com/gp/w/u/0/home/signup' }
];

const companyInfo = [
  { title: 'COMPANY', items: ['About', 'Features', 'Works', 'Career'] },
  { title: 'HELP', items: ['Customer Support', 'Delivery Details', 'Terms & Conditions', 'Privacy Policy'] },
  { title: 'FAQ', items: ['Account', 'Manage Deliveries', 'Orders', 'Payments'] },
  { title: 'RESOURCES', items: ['Free eBooks', 'Development Tutorial', 'How to - Blog', 'Youtube Playlist'] }
];

const Footer: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#f8f8f8', padding: '40px 0', borderTop: '1px solid #e0e0e0' }}>
      <Box sx={{ backgroundColor: '#000', color: '#fff', padding: '36px 64px', borderRadius: '20px', width: '1380px', height: '100px', margin: '0 auto', marginTop: '-130px' }}>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" fontWeight="700" fontSize={'40px'} lineHeight={'45px'} fontFamily={'Poppins'}>
              STAY UPTO DATE ABOUT OUR LATEST OFFERS
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="center">
            <Box display="flex" flexDirection="column" alignItems="center">
              <TextField
                variant="outlined"
                placeholder="Enter your email address"
                sx={{ bgcolor: '#fff', borderRadius: '30px', marginBottom: 2, width: 340, height: 50 }}
                InputProps={{
                  style: { color: 'black' },
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                variant="contained"
                sx={{ borderRadius: '30px', bgcolor: '#fff', color: '#000', padding: '10px 30px', fontWeight: 'bold', width: 340, height: 50 }}
              >
                Subscribe to Newsletter
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={4}  sx={{ padding: '40px 200px',marginLeft:'-60px' }}>
        <Grid item xs={12} sm={3}>
          <Typography variant="h6" fontWeight="700" fontSize={'33.45px'} fontFamily="Poppins" >
            SHOP.CO
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontWeight: 400, fontSize: '14px',width:'290px',height:'66px',lineHeight:'22px',fontFamily:'Poppins', }}>
            We have clothes that suit your style and which you're proud to wear. From women to men.
          </Typography>
          <Box sx={{ display: 'flex', marginTop: 5, gap: 2 }}>
            {socialIcons.map((social, index) => (
              <a href={social.link} target="_blank" key={index} rel="noopener noreferrer">
                {social.icon}
              </a>
            ))}
          </Box>
        </Grid>

        {companyInfo.map((section, index) => (
          <Grid item xs={12} sm={2} key={index} sx= {{
           marginLeft:'30px'
          }}>
            <Typography variant="h6" fontWeight="550" fontSize={'16px'} marginTop={2} letterSpacing="3px"  >
              {section.title}
            </Typography>
            {section.items.map((item, idx) => (
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: 3, fontSize: '16px', fontWeight: 400,marginBottom:'20px'}} key={idx}>
                {item}
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <Box sx={{ padding: '15px 0', borderTop: '1px solid #e0e0e0', textAlign: 'left'}}>
        <Typography variant="body2" color="textSecondary" fontFamily="Poppins" sx= {{
          marginTop:'30px',marginLeft:'170px'
        }}>
          Shop.co © 2000-2023, All Rights Reserved
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'right', gap: 2, marginRight: '50px', marginTop: '-30px' }}>
        {paymentIcons.map((payment, index) => (
          <a href={payment.link} target="_blank" key={index} rel="noopener noreferrer">
            {payment.icon}
          </a>
        ))}
      </Box>
    </Box>
  );
};

export default Footer;

import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import SearchIcon from '../Assests/ImagesData/SearchIcon';
import CartIcon from '../Assests/ImagesData/CartIcon';
import AccountIcon from '../Assests/ImagesData/AccountIcon';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '50px',
  backgroundColor: theme.palette.grey[200],
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
  },
  marginLeft: 0,
  width: '100%',
  maxWidth: '610px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  height: '48px',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%', 
    [theme.breakpoints.up('md')]: {
      width: '100%',
    },
  },
}));

const Header: React.FC = () => {
  return (
    <Box sx={{ overflow: 'hidden' }}> 
      <AppBar position="static" color="transparent" elevation={0} sx={{ marginTop: 2, paddingLeft:'120px' }}>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            sx={{ flexGrow: 1, color: '#000000', fontSize: '32px', fontWeight: 'bold', fontFamily: "Oswald" }}
          >
            SHOP.CO
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '16px', fontFamily: "Oswald", color: '#000000' }}>
            <Typography variant="body1">Shop</Typography>
            <Typography variant="body1">On Sale</Typography>
            <Typography variant="body1">New Arrivals</Typography>
            <Typography variant="body1">Brands</Typography>
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for products..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: '20px' }}>
            <IconButton color="inherit">
              <CartIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ marginRight: 25 }}>
              <AccountIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;

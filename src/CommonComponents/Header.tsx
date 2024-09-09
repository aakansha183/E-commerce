import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchIcon from '../Assests/ImagesData/SearchIcon';
import CartIcon from '../Assests/ImagesData/CartIcon';
import AccountIcon from '../Assests/ImagesData/AccountIcon';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/UseAuth';

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
  const navigate = useNavigate();
  const { logout, isLoggedIn } = useAuth(); 
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    if (isLoggedIn) {
      await logout();
      toast.success("Successfully logged out", { theme: 'dark' });
      handleMenuClose();
    } else {
      toast.error("Please log in or sign up", { theme: 'dark' });
    }
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box sx={{ width: 250, padding: 2 }} role="presentation">
      <Link to = "/Category" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>Shop</Typography>
      </Link>
      <Typography variant="body1" sx={{ marginBottom: 2 }}>On Sale</Typography>
      <HashLink smooth to="/#newarrivals" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>New Arrivals</Typography>
      </HashLink>
      <Typography variant="body1">Brands</Typography>
    </Box>
  );

  return (
    <Box sx={{ overflow: 'hidden',padding:'0px 100px' }}> 
      <AppBar position="static" color="transparent" elevation={0} sx={{ marginTop: 2 }}>
        <Toolbar>
          {!isMobile ? (
            <>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{ flexGrow: 1, color: '#000000', fontSize: '32px', fontWeight: 'bold', fontFamily: 'Poppins', marginRight: '20px' }}
                >
                  SHOP.CO
                </Typography>
              </Link>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '30px', fontSize: '16px', color: '#000000', marginLeft: '80px' }}>
                <Link to="/Category" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">Shop</Typography>
                </Link>
                <Typography variant="body1">On Sale</Typography>
                <HashLink smooth to="/#newarrivals" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <Typography variant="body1">New Arrivals</Typography>
                </HashLink>
                <Typography variant="body1">Brands</Typography>
              </Box>
            </>
          ) : (
            <IconButton edge="start" color="inherit" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }} />
          {!isMobile ? (
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search for products..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          ) : (
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
          )}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '14px', marginLeft: isMobile ? '10px' : '20px' }}>
            <IconButton color="inherit" onClick={() => { navigate('/Cart') }}>
              <CartIcon />
            </IconButton>
            <IconButton 
              color="inherit" 
              onClick={handleMenuOpen}
            >
              <AccountIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {isLoggedIn ? (
                <MenuItem onClick={handleLogout}>
                  Logout
                </MenuItem>
              ) : (
                <MenuItem onClick={() => toast.error("Please log in or sign up", { theme: 'dark' })}>
                  No User Found
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {drawerContent}
      </Drawer>
    </Box>
  );
};

export default Header;


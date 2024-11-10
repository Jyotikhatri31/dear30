import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Box, Container, Divider } from '@mui/material';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="sticky" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: 'black', padding: '5px 0' }}>
      <Container maxWidth={false} className='container'>
        <Toolbar className='head-tool'>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/">
            <Button sx={{ color: 'black', fontSize: '1.2rem', marginRight: 6, background: '#5FEF45',lineHeight: 1.2 }}>
              Logo
            </Button>
            </Link>
            <Link to="/"><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4 }}>Home</Button></Link>
            <Link to="./products"><Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4 }}>Products</Button></Link>
            <Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4 }}>Services</Button>
            <Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4 }}>Dealers</Button>
            <Button sx={{ color: 'white', fontSize: '1.2rem', marginRight: 4 }}>About Us</Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link to="./cart">
            <IconButton sx={{ color: 'white',marginRight: '20px' }}>
              <ShoppingCartOutlinedIcon sx={{fontSize: '2rem'}}/>
            </IconButton>
            </Link>
            <Link to="personalinfo">
            <IconButton sx={{ color: '#5FEF45',marginRight: '10px' }}>
              <AccountCircleOutlinedIcon sx={{fontSize: '2.5rem'}}/>
            </IconButton></Link>

            <Link to="/navigationuser">
            <Button variant="contained" color="success" sx={{ marginLeft: 2, textTransform: 'initial', fontSize: '1.1rem' }}>
              Log In
            </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>

      <Divider sx={{ borderColor: '#5FEF45', mt: 1 }} />
    </AppBar>
  );
}

export default Navbar;

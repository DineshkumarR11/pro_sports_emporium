import React from 'react';
import './home.css'
import pic from './bask.jpg'

import {
  AppBar,
  Button,
  Container,
  CssBaseline,
  Grid,
  IconButton,
  Toolbar,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import Footer from './Footer';

// Define a custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#2ecc71', // Green color for primary elements
    },
    secondary: {
      main: '#3498db', // Blue color for secondary elements
    },
  },
});
export default function Navbar()
{
    return(
<AppBar position="sticky">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <div className='foot'>
        
          <Typography variant="h6" ><SportsBasketballIcon/>Sports Emporium</Typography>
          </div>
          <div className='bal'>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="p">Products</Button>
          <Button color="inherit">Categories</Button>
          <Button color="inherit" href="ab">About Us</Button>
          <Button color="inherit" href="c">Contact</Button>
          </div>
          <div className='r8'>
          <Button color="inherit" href="/login">LOGIN</Button>
          <Button color="inherit" href="/r">SIGN UP</Button>
          </div>
        </Toolbar>
      </AppBar>
    );
}
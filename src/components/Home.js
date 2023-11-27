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
import Carosel from './carosel';

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

function Hello() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>
        <Container sx={{ textAlign: 'center', my: 4 }}>
          <Typography variant="h3" gutterBottom>
            Elevate Your Game with Premium Sports Gear
          </Typography>
          <Typography variant="h5" paragraph>
            Explore our high-quality sports products and gear for every athlete.
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Shop Now
          </Button>
        </Container>
        <Carosel/>
        <Container sx={{ my: 4 }}>
          <Grid container spacing={3}>
            {/* Featured Categories */}
            <Grid item xs={12} sm={3} >
              <img className='di'
                src="https://img.freepik.com/free-vector/basketball-ball-isolated_1284-42545.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=sph"
                alt="Basketball Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Basketball
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='ai'
                src="https://img.freepik.com/free-vector/vector-isolated-realistic-soccer-ball-white_1284-41932.jpg?w=740&t=st=1701018089~exp=1701018689~hmac=8ad3d194c403a2d1f9f4cd08d18abbabe952375134d6658a9eb3112a6b298d45"
                alt="Soccer Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Soccer
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='bi'
                src="https://img.freepik.com/premium-photo/ping-pong-game_172429-483.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=ais"
                alt="Running Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Ping Pong
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='ci'
                src="https://img.freepik.com/free-vector/two-racket-tennis-ball-illustration_24877-60158.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=sph"
                alt="Running Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Tennis
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='ei'
                src="https://img.freepik.com/premium-vector/volleyball-ball-realistic-summer-beach-sport-symbol_533410-1615.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=ais"
                alt="Running Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                VollyBall
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='fi'
                src="https://img.freepik.com/premium-photo/red-cricket-ball-wooden-bat-isolated-white_124894-719.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=sph"
                alt="Running Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Cricket
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='gi'
                src="https://img.freepik.com/free-photo/pair-trainers_144627-3800.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=sph"
                alt="Running Category"
                style={{ width: '90%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Shoes
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <img className='ki'
                src="https://img.freepik.com/premium-vector/blue-sports-bike-vector-illustration_622487-437.jpg?size=626&ext=jpg&ga=GA1.1.2135567520.1700545640&semt=sph"
                alt="Running Category"
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <Typography variant="h5" align="center" mt={2}>
                Cycles
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </main>
      
    </ThemeProvider>
  
  );
}

export default Hello;

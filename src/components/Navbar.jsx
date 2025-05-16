import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        background: 'linear-gradient(90deg, #E3F2FD 0%, #BBDEFB 100%)', // Light blue gradient
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', // Subtle shadow
        color: '#1E1E1E', // Dark text for contrast
        
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          padding: { xs: '0 16px', md: '0 32px' }, // Responsive padding
          minHeight: { xs: 56, md: 64 }, // Adjusted height for responsiveness
        }}
      >
        {/* Logo/Title Section */}
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          sx={{
            fontWeight: 'bold',
            fontFamily: '"Roboto", sans-serif',
            color: '#1E1E1E',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <LocalHospitalIcon
            sx={{
              fontSize: 40, // Larger hospital icon
              color: '#2196F3', // Blue color for the icon
            }}
          />
          Salud está en tus manos
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
          <Button
            color="inherit"
            component={RouterLink}
            to="/"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3', // Blue hover effect
                backgroundColor: 'transparent',
              },
            }}
          >
            Inicio
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/perfil"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Mi perfil
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/citas"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Citas
          </Button>

          <Button
            color="inherit"
            component={RouterLink}
            to="/diagnostico"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Diagnóstico
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/signos"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Signos Vitales
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/hospitales"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Hospitales
          </Button>
          <Button
            color="inherit"
            component={RouterLink}
            to="/referencias"
            sx={{
              textTransform: 'none',
              fontWeight: 500,
              fontSize: '1rem',
              color: '#1E1E1E',
              '&:hover': {
                color: '#2196F3',
                backgroundColor: 'transparent',
              },
            }}
          >
            Referencias
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
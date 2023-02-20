import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    background: {
      dark: '#1D1D1D',
      light: '#FFFFFF',
      grey: '#2D2D2D'
    },
    buttons: {
      primary: '#FF866C',
      dark: '#1D1D1D'
    },
    primary: {
      main: '#F7F0E3',
      white: '#FFFFFF',
      light: '#B5B1AA',
      dark: '#7D7D7D',
      black: '#1D1D1D'
    },
    secondary: {
      main: '#E2E2E2',
      dark: '#A8A8A8'
    },
    spot: {
      main: '#FF866C'
    }
  },
  breakpoints: {
    values: {
      xs: 420,
      sm: 768,
      md: 1024,
      lg: 1680,
      xl: 1920
    }
  }
});

import { createTheme } from '@mui/material';
import { GRAYSCALE_COLORS, OTHER_COLORS, SCREENS } from './constants';

export const theme = createTheme({
  palette: {
    background: {
      dark: GRAYSCALE_COLORS.BLACK,
      white: GRAYSCALE_COLORS.WHITE,
      grey: GRAYSCALE_COLORS.DARK
    },
    buttons: {
      primary: OTHER_COLORS.RED,
      dark: GRAYSCALE_COLORS.BLACK
    },
    primary: {
      main: GRAYSCALE_COLORS.MAIN,
      white: GRAYSCALE_COLORS.WHITE,
      light: GRAYSCALE_COLORS.LIGHT,
      dark: GRAYSCALE_COLORS.GREY,
      black: GRAYSCALE_COLORS.BLACK
    },
    secondary: {
      main: GRAYSCALE_COLORS.SECONDARY_LIGHT,
      dark: GRAYSCALE_COLORS.SECONDARY_GREY
    },
    spot: {
      main: OTHER_COLORS.RED
    }
  },
  typography: {
    fontFamily: ['Reckless', 'Neue Haas Unica'].join(',')
  },
  breakpoints: {
    values: {
      xs: SCREENS.EXTRA_SMALL,
      sm: SCREENS.SMALL,
      md: SCREENS.MEDIUM,
      lg: SCREENS.LARGE,
      xl: SCREENS.EXTRA_LARGE
    }
  }
});

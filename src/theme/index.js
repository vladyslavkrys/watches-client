import { createTheme } from '@mui/material';
import { GRAYSCALE_COLORS, OTHER_COLORS, SCREENS } from './constants';

export const basicTheme = createTheme({
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
    fontWeightNormal: 400,
    fontFamily: ['Reckless', 'Neue Haas Unica'].join(',') // TODO ASK
  },
  breakpoints: {
    values: {
      xs: SCREENS.EXTRA_SMALL,
      sm: SCREENS.SMALL,
      md: SCREENS.MEDIUM,
      lg: SCREENS.LARGE,
      xl: SCREENS.EXTRA_LARGE
    }
  },
  spacing: (factor) => `${factor / 16}rem`
});

export const theme = createTheme(basicTheme, {
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    }
  },
  typography: {
    color: basicTheme.palette.primary.white,
    h1: {
      fontSize: basicTheme.typography.pxToRem(64), // TODO ASK
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    h2: {
      fontSize: basicTheme.typography.pxToRem(48),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    h3: {
      fontSize: basicTheme.typography.pxToRem(26),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    h4: {
      fontSize: basicTheme.typography.pxToRem(24),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    h5: {
      fontSize: basicTheme.typography.pxToRem(18),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    h6: {
      fontSize: basicTheme.typography.pxToRem(16),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    body1: {
      fontSize: basicTheme.typography.pxToRem(14),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    body2: {
      fontSize: basicTheme.typography.pxToRem(12),
      fontWeight: basicTheme.typography.fontWeightNormal
    },
    subtitle1: {
      fontSize: basicTheme.typography.pxToRem(16),
      fontWeight: basicTheme.typography.fontWeightNormal,
      color: basicTheme.palette.primary.white
    },
    subtitle2: {
      fontSize: basicTheme.typography.pxToRem(14),
      fontWeight: basicTheme.typography.fontWeightNormal
    }
  }
});

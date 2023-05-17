import { createTheme } from '@mui/material/styles';
import { green, yellow, red, grey, blue } from '@mui/material/colors';

const primaryColor = grey[900];
const greenColor = green[700];
const yellowColor = yellow[800];
const redColor = red.A400;
const blueColor = blue.A700;
const textColor = grey[900];
const titleColor = 'hsl(0, 0%, 10%)';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: redColor,
    },
    success: {
      main: greenColor,
    },
    warning: {
      main: yellowColor,
    },
    error: {
      main: redColor,
    },
    info: {
      main: blueColor,
    },
    text: {
      primary: textColor,
      secondary: titleColor,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h1: {
          fontSize: '2.2rem',
        },
      },
    },
    MuiTablePagination: {
      styleOverrides: {
        root: {
          '& .MuiTablePagination-selectLabel': {
            marginTop: '14px',
          },
          '& .MuiTablePagination-displayedRows': {
            marginTop: '16px',
          },
        },
      },
    },
  },
});

export default theme;

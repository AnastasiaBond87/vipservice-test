import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5c87db',
      dark: '#3e67b7',
      light: '#5c87db',
    },
    secondary: {
      main: '#b7bac1',
      light: '#e0e1e3',
    },
    action: {
      disabledBackground: '#b7bac1',
      disabled: '#ffffff',
    },
    text: {
      primary: '#5c5c5c',
      secondary: '#b7bac1',
    },
    error: {
      main: '#ef5350',
    },
  },
});

export default theme;

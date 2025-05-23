import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff5722', 
    },
    secondary: {
      main: '#2196f3', 
    },
    mode:'dark',
    background:{
        default:'#0e1428'
    },
    text:{
        primary:'#ffff'
    }
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, 
        },
      },
    },
  },
});

export default theme;

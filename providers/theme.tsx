import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
let theme = createTheme({
  palette: {
    primary: {
      main: '#0E76BC',
      light: "#3AA8FF",
    },

    secondary: {
      //main: '#A05851'
      main: yellow[500], // Yellow color
    }

  },

  components: {
    MuiButton: {
      styleOverrides: {
        outlinedSecondary: {
          color: 'black',
          borderColor: 'black',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            fontWeight: 'bold',
          },
        },
      },
    },
  },

});
theme = responsiveFontSizes(theme);

export default theme;

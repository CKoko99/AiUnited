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
          transition: 'font-weight 0.3s',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            fontWeight: 'bold',
          },
        },
        containedSecondary: {
          transition: 'font-weight 0.3s',
          '&:hover': {

            fontWeight: 'bold',
          },
        },
      },
    },
  },

});
theme = responsiveFontSizes(theme);

export default theme;

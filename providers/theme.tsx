import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import GustavoFont from '../public/assets/fonts/Gustavo/GustavoFont'
import PoppinsFont from '../public/assets/fonts/Poppins/PoppinsFont'


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
  typography: {
    fontFamily: [PoppinsFont].join(','),
    h1: {
      fontFamily: [GustavoFont].join(','),
      lineHeight: "1.1",
    },
    h2: {
      fontFamily: [GustavoFont].join(','),
      lineHeight: "1.1",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        outlinedSecondary: {
          color: 'black',
          borderColor: 'black',
          transition: 'all 0.3s',
          '&:hover': {
            borderColor: 'black',
            color: 'black',
            backgroundColor: '#cacaca',
          },
        },
        textSecondary: {
          color: '#111111',
          transition: 'all 0.3s',
          '&:hover': {
            color: 'black',
            backgroundColor: '#cacaca',
          },
        },
        containedSecondary: {
          transition: 'all 0.3s',
          '&:hover': {

          },
        },
      },
    },
  },

});
theme = responsiveFontSizes(theme);
export const CustomFonts = {
  Gustavo: GustavoFont,
  Poppins: PoppinsFont,
}
export default theme;

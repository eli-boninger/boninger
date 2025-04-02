import { grey } from "@mui/material/colors";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        primary: {
          main: '#D4DFF2',
        },
        background: {
          default: '#414141'
        },
        info: {
          main: '#A5E1FD',
        }
      }
    },
    light: {
      palette: {
        primary: {
          main: '#32539A',
        },
        background: {
          default: grey[50]
        }
      }
    }
  },
  typography: {
    fontFamily: "Open Sans,sans-serif",
    h1: {
      fontSize: '3.5rem'
    }
  }
});

theme = createTheme(theme, {
  typography: {
    color: theme.palette.text.primary,
    body1: {
      color: theme.palette.text.primary
    }
  },
  components: {
    MuiTypography: {
      defaultProps: {
        color: "text.primary"
      }
    }
  }
})


theme = responsiveFontSizes(theme)
export { theme };
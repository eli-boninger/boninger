import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Open Sans,sans-serif",
    h1: {
      fontSize: '3rem'
    }
  },

  palette: {
    secondary: {
      main: "#393E41",
    },
    primary: {
      light: "#DDF8E8",
      main: "#CDD5D1",
    },
    info: {
      main: "#EB9486",
    },
  },
});

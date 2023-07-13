import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#393E41",
    },
    secondary: {
      light: "#DDF8E8",
      main: "#CDD5D1",
    },
    info: {
      main: "#7880B5",
    },
  },
});

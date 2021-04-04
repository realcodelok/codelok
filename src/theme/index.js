import { createMuiTheme } from "@material-ui/core";
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff",
      color: "#090b35",
      hoverBg: "#ebecf5",
      hoverColor: "#dc5052",
    },
    secondary: {
      main: "#dc5052",
      color: "#dc5052",
    },
    error: {
      main: "#dc5052",
    },
    success: {
      main: "#06a70e",
    },
    background: {
      default: "#fff",
      bodyBackgroundImage: `url("/assets/svg/body-bg-transparent.svg")`,
    },
  },
  typography: {
    fontFamily: "Poppins Medium",
    body1: {
      fontFamily: "Poppins",
    }
  },
});

export default theme;

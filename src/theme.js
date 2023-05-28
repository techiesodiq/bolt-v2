import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#013EBD",
    },
    secondary: {
      main: "#F8EFD0",
    },
    header: {
      main: "#101828",
    },
    body: {
      main: "#475467",
    },
  },
  typography: {
    fontFamily: "Red Hat Display, sans-serif",
    h1: {
      fontSize: "56px",
      lineHeight: "68px",
      fontWeight: 700,
      color: "#101828",
    },
    h2: {
      fontSize: "48px",
      lineHeight: "54px",
      fontWeight: 700,
      color: "#101828",
    },
    h3: {
      fontSize: "36px",
      lineHeight: "44px",
      fontWeight: 700,
      color: "#101828",
    },
    body1: {
      fontSize: "20px",
      lineHeight: "34px",
      fontWeight: 400,
      color: "#475467B2",
    },
    body2: {
      fontSize: "18px",
      lineHeight: "27px",
      fontWeight: 400,
      color: "#475467B2",
    },
    body3: {
      fontSize: "16px",
      lineHeight: "27px",
      fontWeight: 400,
      color: "#475467B2",
    },
    button: {
      fontSize: "16px",
      fontWeight: 500,
    },
    counterText: {
      fontSize: "64px",
      lineHeight: "48px",
    },
  },
  components: {
    // Name of the component
    MuiToolbar: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          marginLeft: "30px",
          marginRight: "30px",
        },
      },
    },
  },
});

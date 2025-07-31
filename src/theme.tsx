"use client";
import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    tablet: true;
  }
}

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      tablet: 420,
    }
  },
  palette: {
    mode: "light",
    primary: {
      main: "#003366",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d32f2f",
      contrastText: "#fff",
    },
    background: {
      default: "#F5ECEB",
      paper: "#fff",
    },
    text: {
      primary: "#111",
      secondary: "#333",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "16px",
          margin: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        },
      },
    },
  }
});

export default theme;

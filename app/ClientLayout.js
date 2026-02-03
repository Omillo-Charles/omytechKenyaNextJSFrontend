"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-webly-sleek), sans-serif",
    h1: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    h2: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    h3: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    h4: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    h5: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    h6: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    button: { fontFamily: "var(--font-webly-sleek), sans-serif", textTransform: "none" },
    body1: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    body2: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    caption: { fontFamily: "var(--font-webly-sleek), sans-serif" },
    overline: { fontFamily: "var(--font-webly-sleek), sans-serif" },
  },
});

export default function ClientLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      {children}
      <Footer />
    </ThemeProvider>
  );
}

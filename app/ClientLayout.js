"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const theme = createTheme({
  typography: {
    fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    h1: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    h2: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    h3: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    h4: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    h5: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    h6: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    button: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", textTransform: "none" },
    body1: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    body2: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    caption: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
    overline: { fontFamily: "var(--font-ubuntu), -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" },
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

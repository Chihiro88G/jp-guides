import { Outlet } from "react-router-dom";
import { Box, CssBaseline, createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import TopNavBar from "./TopNavBar";
import Footer from "./Footer";
import MobileNavBar from "./MobileNavBar";

export default function Layout() {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  
  const darkTheme = createTheme(
    {
    palette: {
      mode: 'dark',
      primary: {
        main: '#121212',
      },
    },
  }
  );

  return(
    <Box>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        {isDesktop ? <TopNavBar /> : <MobileNavBar />}
      </ThemeProvider>
      <Box
        component="main"
        sx={{
          minHeight: '100vh',
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
      <ThemeProvider theme={darkTheme}>
        <Footer />
      </ThemeProvider>
    </Box>
  );
}
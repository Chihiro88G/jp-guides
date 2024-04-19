import { Box, CssBaseline } from "@mui/material";
import TopNavBar from "./TopNavBar";
import { Outlet } from "react-router-dom";


export default function Layout() {
  return(
    <Box>
      <CssBaseline />
      <TopNavBar />
      <Box
        component="main"
        sx={{
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
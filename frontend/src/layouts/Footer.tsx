import React from "react";

import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box } from "@mui/material";

import Logo from "../components/Logo";
import { getPages } from "../utils/getPages";
import NavContainer from "../components/NavContainer";
import PageButton from "./PageButton";

export default function Footer() {
  return (
    <NavContainer component='footer'>
      <Box
        sx={{
          margin: "0 auto",
          padding: "30px 0",
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
        >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Logo />
        </Box>
        <Box sx={{ display: 'flex' }}>
          {getPages().map((page) => (
          <PageButton 
            pageName={page.name}
            path={page.path}
            key={page.name}
          />
        ))}
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
          <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
          <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
        </Box>
      </Box>
    </NavContainer>
  );
};

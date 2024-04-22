import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import { getPages } from '../utils/getPages';

export default function TopNavBar() {
  return (
    <AppBar position="static" component='header' style={{ boxShadow: 'none'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
            {getPages().map((page) => (
              <Button
                key={page}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <UserIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

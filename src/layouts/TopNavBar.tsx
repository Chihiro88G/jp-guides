import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import { getPages } from '../utils/getPages';
import NavContainer from '../components/NavContainer';

export default function TopNavBar() {
  return (
    <NavContainer component='header'>
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
    </NavContainer>
  );
}

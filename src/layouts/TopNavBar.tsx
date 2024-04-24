import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import { getPages } from '../utils/getPages';
import NavContainer from '../components/NavContainer';
import { useNavigate } from 'react-router-dom';

export default function TopNavBar() {
  const navigate = useNavigate();

  return (
    <NavContainer component='header'>
      <Logo />
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
        {getPages().map((page) => (
          <Button
            key={page.name}
            sx={{ my: 2, color: 'white', display: 'block' }}
            onClick={() => navigate(page.path)}
          >
            {page.name}
          </Button>
        ))}
      </Box>
      <UserIcon />
    </NavContainer>
  );
}

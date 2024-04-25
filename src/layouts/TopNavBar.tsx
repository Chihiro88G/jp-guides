import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import { getPages } from '../utils/getPages';
import NavContainer from '../components/NavContainer';
import { useNavigate } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';

export default function TopNavBar() {
  const navigate = useNavigate();
  const likeCount = useSelector((state: any) => state.likeCount.value);

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
        <Box sx={{ padding: '20px' }}>
          <FavoriteIcon />{likeCount}
        </Box>
      </Box>
      <UserIcon />
    </NavContainer>
  );
}

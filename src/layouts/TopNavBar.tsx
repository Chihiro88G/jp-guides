import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import NavContainer from '../components/NavContainer';
import { getPages } from '../utils/getPages';

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
        <LikeCountIcon />
        <CartCountIcon />
      </Box>
      <UserIcon />
    </NavContainer>
  );
}

function LikeCountIcon() {
  const likeCount = useSelector((state: any) => state.likeCount.value);
  return (
    <Box sx={{ padding: '20px 8px' }}>
      <FavoriteIcon />{likeCount}
    </Box>
  )
}

function CartCountIcon() {
  const cartCount = useSelector((state: any) => state.cartCount.value);
  return (
    <Box sx={{ padding: '20px 8px' }}>
      <ShoppingCartIcon />{cartCount}
    </Box>
  )
}

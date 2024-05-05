import React from 'react';
import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';

import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import NavContainer from '../components/NavContainer';
import { getPages } from '../utils/getPages';
import PageButton from './PageButton';

export default function TopNavBar() {
  return (
    <NavContainer component='header'>
      <Logo />
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'end' }}>
        {getPages().map((page) => (
          <PageButton 
            pageName={page.name}
            path={page.path}
            key={page.name}
          />
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

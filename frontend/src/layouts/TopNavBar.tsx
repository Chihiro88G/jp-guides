import { useSelector } from 'react-redux';

import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import NavContainer from '../components/NavContainer';
import { getPages } from '../utils/getPages';
import PageButton from './PageButton';
import { Link } from 'react-router-dom';
import { RootState } from '../store';

export default function TopNavBar() {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

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
      
      {isAuthenticated ?
        <UserIcon />
        : 
        <Box>
          <Link to='/login'>
            <LoginIcon sx={{ color: 'white' }}/>
          </Link>
        </Box>
      }
    </NavContainer>
  );
}

type LikeCountState = {
  likeCount: {
    value: number;
  }
}

function LikeCountIcon() {
  const likeCount = useSelector((state: LikeCountState) => state.likeCount.value);
  return (
    <Box sx={{ p: '20px 8px' }}>
      <FavoriteIcon />{likeCount}
    </Box>
  )
}

type CartCountState = {
  cartCount: {
    value: number;
  }
}

function CartCountIcon() {
  const cartCount = useSelector((state: CartCountState) => state.cartCount.value);
  return (
    <Box sx={{ p: '20px 8px' }}>
      <ShoppingCartIcon />{cartCount}
    </Box>
  )
}

import { useState, MouseEvent } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

import Logo from '../components/Logo';
import UserIcon from '../components/UserIcon';
import { getPages } from '../utils/getPages';
import NavContainer from '../components/NavContainer';
import PageButton from './PageButton';

export default function MobileNavBar() {
  return (
    <NavContainer component='header'>
      <PageMenu />
      <Box sx={{ display: 'flex', m: '0 auto' }}>
        <Logo />
      </Box>
      <UserIcon />
    </NavContainer>
  );
}

function PageMenu() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: 'block',
        }}
      >
        {getPages().map((page) => (
          <MenuItem key={page.name} onClick={handleCloseNavMenu}>
            <PageButton 
              pageName={page.name}
              path={page.path}
            />
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}

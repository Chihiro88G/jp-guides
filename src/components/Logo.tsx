import React from 'react';
import Typography from '@mui/material/Typography';
import TourIcon from '@mui/icons-material/Tour';

export default function Logo() {

  return (
    <React.Fragment>
      <TourIcon sx={{ margin: '3px' }}/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: 'flex',
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.3rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        GuideMeJp
      </Typography>
    </React.Fragment>
  );
}

import { Fragment } from 'react';
import Typography from '@mui/material/Typography';
import TourIcon from '@mui/icons-material/Tour';

export default function Logo() {

  return (
    <Fragment>
      <TourIcon sx={{ m: '3px' }}/>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="/"
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
    </Fragment>
  );
}

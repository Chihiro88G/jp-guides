import React, { ReactNode } from 'react';

import { Typography, useMediaQuery } from '@mui/material';

type PageTitleProps = {
  children: ReactNode;
  variant?: 'h6';
  color?: string;
}

export default function PageTitle(props: PageTitleProps) {
  const { children, variant, color,  } = props;
  const isDesktop = useMediaQuery('(min-width: 960px)');

  return (
    <Typography
      variant={variant || (isDesktop ? 'h2' : 'h4')}
      color={color ? color : 'black'}
      sx={{
        width: { xs: '80%', md: '35%'},
        padding: '20px',
        fontFamily: 'system-ui',
      }}
    >
      {children}
    </Typography>
  )
}
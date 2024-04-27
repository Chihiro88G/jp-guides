import React, { ReactNode } from 'react';

import { Typography } from '@mui/material';

type PageTitleProps = {
  children: ReactNode;
  variant?: 'h6';
  color?: string;
  width?: string;
}

export default function PageTitle(props: PageTitleProps) {
  const { children, variant, color, width } = props;

  return (
    <Typography
      variant={variant || 'h2'}
      color={color ? color : 'black'}
      sx={{
        width: `${width ? width : '100%'}`,
        padding: '20px',
        fontFamily: 'system-ui',
      }}
    >
      {children}
    </Typography>
  )
}
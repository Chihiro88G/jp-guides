import React, { ReactNode } from 'react';

import { Typography } from '@mui/material';

type StyledTextTypes = {
  children: ReactNode
  bold?: boolean;
}

export default function StyledText(props: StyledTextTypes) {
  const { children, bold } = props;
  return (
    <Typography
      sx={{
        fontWeight: bold ? 'bold' : '',
      }}
    >
      {children}
    </Typography>
    );
}
import React, { ReactNode } from 'react';

import { Box } from '@mui/material';

type TourCardsProps = {
  children: ReactNode;
}

export default function TourCards({ children }: TourCardsProps) {
  return (
    <Box 
      sx={{ 
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: '10px',
        flexWrap: 'wrap',
      }}>
        {children}
    </Box>
  )
}
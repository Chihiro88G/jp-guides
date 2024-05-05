import { ReactNode } from 'react';
import { Box } from '@mui/material';

export default function TravelTipsWrapper({ children }: { children: ReactNode} ) {

  return (
      <Box
        sx={{
          width: { xs: '100%', md: '80%'},
          padding: '40px',
          margin: '0 auto'
        }}>
          {children}
      </Box>
  )
}
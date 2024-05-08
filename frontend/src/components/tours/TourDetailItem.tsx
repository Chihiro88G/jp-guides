import  { ReactNode } from 'react';
import { Box } from '@mui/material';

type TourDetailItemProps = {
  children: ReactNode
};

export default function TourDetailItem({ children }: TourDetailItemProps) {
  return (
    <Box
      sx={{ 
        margin: '10px 0',
        width: { xs: '100%', md: '15%'}
      }}>
      {children}
    </Box>
  )
}
import * as React from 'react';

import { Box } from '@mui/material';
import Title from '../Title';

export default function TravelTips() {
  return (
    <Box
      sx={{
        display: 'block',
        height: '30vh',
        backgroundColor: 'pink'
      }} 
    >
      <Title>Travel Tips</Title>
    </Box>
  )
}
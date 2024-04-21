import { Box } from '@mui/material';
import * as React from 'react';
import Title from '../Title';

export default function HomeTop() {
  return (
    <Box
      sx={{
        display: 'block',
        height: '50vh',
        backgroundColor: 'yellowgreen'
      }} 
    >
      <Title>Top</Title>
    </Box>
  )
}
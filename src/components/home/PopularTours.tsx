import * as React from 'react';

import { Box, Typography } from '@mui/material';
import Title from '../Title';
import TourCard from '../TourCard';

export default function PopularTours() {
  return (
    <Box 
      sx={{
        display: 'block',
        backgroundColor: 'beige'
      }}
    >
      <Title>Popular Tours</Title>
      <Box 
        sx={{ 
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: '10px',
          flexWrap: 'wrap',
        }}>
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
          <TourCard />
      </Box>
      {/* <Typography>Browse all tours...</Typography> */}
    </Box>
  )
}
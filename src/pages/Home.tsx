import React from 'react';

import { Box } from '@mui/material';
import HomeTop from '../components/home/HomeTop';
import PopularTours from '../components/home/PopularTours';
import TravelTips from '../components/home/TravelTips';

export default function Home() {
  return (
    <Box style={{ height: 'inherit', margin: '0 auto' }} >
      <HomeTop />
      <PopularTours />
      <TravelTips />
    </Box>
  )
}
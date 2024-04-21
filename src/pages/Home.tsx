import { Box } from '@mui/material';
import * as React from 'react';
import HomeTop from '../components/home/HomeTop';
import PopularTours from '../components/home/PopularTours';
import TravelTips from '../components/home/TravelTips';

export default function Home() {
  return (
    <Box style={{ background: '#f2f6fc', height: '200vh', margin: '0 auto' }} >
      <HomeTop />
      <PopularTours />
      <TravelTips />
    </Box>
  )
}
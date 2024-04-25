import React from 'react';

import { Typography } from '@mui/material';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';
import TourCards from '../TourCards';

export default function PopularTours() {
  return (
    <SectionWrapper bgColor='beige' >
      <Title>Popular Tours</Title>
      <TourCards>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </TourCards>
      {/* <Typography>Browse all tours...</Typography> */}
    </SectionWrapper>
  )
}
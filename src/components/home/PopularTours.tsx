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
        <TourCard cardId={0}/>
        <TourCard cardId={1}/>
        <TourCard cardId={2}/>
        <TourCard cardId={3}/>
        <TourCard cardId={4}/>
        <TourCard cardId={5}/>
      </TourCards>
      {/* <Typography>Browse all tours...</Typography> */}
    </SectionWrapper>
  )
}
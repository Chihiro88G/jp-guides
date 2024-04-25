import React from 'react';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';

export default function ToursList() {
  return (
    <SectionWrapper bgColor='beige'>
      <Title>Tours</Title>
      <TourCards>
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
        <TourCard />
      </TourCards>
    </SectionWrapper>
  )
}
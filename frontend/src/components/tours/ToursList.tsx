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
        <TourCard cardId={0}/>
        <TourCard cardId={1}/>
        <TourCard cardId={2}/>
        <TourCard cardId={3}/>
        <TourCard cardId={4}/>
        <TourCard cardId={5}/>
      </TourCards>
    </SectionWrapper>
  )
}
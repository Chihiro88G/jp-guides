import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import SectionWrapper from '../SectionWrapper';
import Title from '../Title';
import TourCard from '../TourCard';
import TourCards from '../TourCards';

export default function ToursList() {
  const [items, setItems] = useState<any>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours`)
    .then(res => res.json())
    .then(data => setItems(data));
  }, []);

  if (!items) return <Box>No Tours</Box>

  return (
    <SectionWrapper bgColor='beige'>
      <Title>Tours</Title>
      <TourCards>
        {items.map((item: any) => (
          <TourCard tourData={item} key={item.id}/>
        ))}
      </TourCards>
    </SectionWrapper>
  )
}
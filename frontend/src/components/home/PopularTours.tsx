import { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';
import TourCards from '../TourCards';

export default function PopularTours() {
  const [items, setItems] = useState<any>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours`)
    .then(res => res.json())
    .then(data => setItems(data));
  }, []);

  if (!items) return <Box>No Tours</Box>

  return (
    <SectionWrapper bgColor='beige' >
      <Title>Popular Tours</Title>
      <TourCards>
        {items.map((item: any) => (
          <TourCard tourData={item} key={item.id}/>
        ))}
      </TourCards>
      {/* <Typography>Browse all tours...</Typography> */}
    </SectionWrapper>
  )
}
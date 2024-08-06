import { useEffect, useState } from 'react';
import { Box, Link } from '@mui/material';
import { TourType } from '../../types/tours';
import Title from '../Title';
import TourCard from '../TourCard';
import SectionWrapper from '../SectionWrapper';
import TourCards from '../TourCards';

export default function PopularTours() {
  const [items, setItems] = useState<TourType[]>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/tours?popular=true`)
    .then(res => res.json())
    .then((data: TourType[]) => setItems(data));
  }, []);

  if (!items) return <Box>No Tours</Box>

  return (
    <SectionWrapper bgColor='beige' height='470px' >
      <Title>Popular Tours</Title>
      <TourCards>
        {items.map((item: TourType) => (
          <TourCard tourData={item} key={item.id}/>
        ))}
      </TourCards>
      <Link sx={{ float: 'right'}}>Browse all tours...</Link>
    </SectionWrapper>
  )
}
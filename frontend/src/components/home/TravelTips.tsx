import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { TravelTipsType } from '../../types/travelTips';
import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import AccordionItem from './AccordionItem';
import TravelTipsWrapper from './TravelTipsWrapper';

export default function TravelTips() {
  const [data, setData] = useState<TravelTipsType[]>();
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/travel-tips`)
    .then(res => res.json())
    .then((data: TravelTipsType[]) => setData(data));
  }, []);

  if (!data) return <Box>No Travel Tips</Box>
  
  return (
    <SectionWrapper>
      <TravelTipsWrapper>
        <Title>Travel Tips for Japan</Title>
        {data.map((item: TravelTipsType) => (
          <AccordionItem
            key={item.title}
            topSummary={item.title}
            details={item.content}
          />
        ))}
      </TravelTipsWrapper>
    </SectionWrapper>
  )
}
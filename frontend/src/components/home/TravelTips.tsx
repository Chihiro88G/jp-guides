import React, { useEffect, useState } from 'react';

import { Box } from '@mui/material';

import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import AccordionItem from './AccordionItem';

export default function TravelTips() {
  const [data, setData] = useState<any>();
  
  useEffect(() => {
    fetch('http://localhost:8000/travel-tips')
    .then(res => res.json())
    .then(data => setData(data));
  });

  if (!data) return <Box>No Travel Tips</Box>
  
  return (
    <SectionWrapper>
      <Title>Travel Tips for Japan</Title>
      <Box sx={{ width: '80%', padding: '40px', margin: '0 auto' }}>
        {data.map((item: any) => (
          <AccordionItem
            key={item.title}
            topSummary={item.title}
            details={item.content}
          />
        ))}
      </Box>
    </SectionWrapper>
  )
}
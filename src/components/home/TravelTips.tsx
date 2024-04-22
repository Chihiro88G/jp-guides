import React from 'react';

import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import AccordionItem from './AccordionItem';
import { Box } from '@mui/material';

export default function TravelTips() {
  return (
    <SectionWrapper>
      <Title>Travel Tips for Japan</Title>
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <AccordionItem 
          topSummary='Accordion 1'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.'
        />
        <AccordionItem 
          topSummary='Accordion 2'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.'
        />
        <AccordionItem 
          topSummary='Accordion 3'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.'
        />
        <AccordionItem 
          topSummary='Accordion 4'
          details='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.'
        />
    </Box>
    </SectionWrapper>
  )
}
import React from 'react';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';

type AccordionItemProps = {
  topSummary: string;
  details: string;
}

export default function AccordionItem({ topSummary, details }: AccordionItemProps) {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        {topSummary}
      </AccordionSummary>
      <AccordionDetails>
        {details}
      </AccordionDetails>
    </Accordion>
  );
}
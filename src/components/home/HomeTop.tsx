import * as React from 'react';

import SectionWrapper from '../SectionWrapper';
import { Typography } from '@mui/material';

export default function HomeTop() {
  return (
    <SectionWrapper bgImage='https://cdn.kimkim.com/files/a/images/11a9690afde1a50f9439e22aa8d564237970fb93/original-8ad1591102e554cd50d9e7cea18d990d.jpg' height='50vh' >
      <Typography
        variant="h2"
        color='white'
        sx={{ width: '35%', padding: '20px', fontFamily: 'system-ui', }}
      >
        FIND YOUR BEST TOURS
      </Typography>
      <Typography
        variant="h6"
        color='white'
        sx={{ padding: '20px', fontFamily: 'system-ui', }}
      >
        <i>Where adventure awaits</i>
      </Typography>
    </SectionWrapper>
  )
}
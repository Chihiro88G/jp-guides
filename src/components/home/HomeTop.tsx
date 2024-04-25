import React from 'react';

import SectionWrapper from '../SectionWrapper';
import PageTitle from '../PageTitle';

export default function HomeTop() {
  return (
    <SectionWrapper bgImage='https://cdn.kimkim.com/files/a/images/11a9690afde1a50f9439e22aa8d564237970fb93/original-8ad1591102e554cd50d9e7cea18d990d.jpg' height='50vh' >
      <PageTitle color='white' width='35%'>
        GET YOUR BEST TOURS
      </PageTitle>
      <PageTitle variant='h6' color='white'>
        <i>Where adventure awaits</i>
      </PageTitle>
    </SectionWrapper>
  )
}
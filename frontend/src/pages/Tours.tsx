import { Fragment, useState } from 'react';
import ToursList from '../components/tours/ToursList';
import { Box } from '@mui/material';
import PageTitle from '../components/PageTitle';
import SectionWrapper from '../components/SectionWrapper';
import Selection from '../components/tours/Selection';

const destinationItems = ['Tokyo', 'Kyoto', 'Hokkaido'];
const durationItems = ['1 day', '2-3 days', '3-5 days'];
const activityLevelItems = ['Moderate', 'High', 'Very High'];

export default function Tours() {
  const [query, setQuery] = useState<string>('');

  // const handleDestinationChange = () => {
  //   console.log('inside destination change');
  // }

  const handleActivityLevelChange = (activityLevel: string) => {
    setQuery(activityLevel);
  }

  return (
    <Fragment>
      <SectionWrapper height='inherit' bgColor='white'>
        <PageTitle full>FIND TOURS</PageTitle>
        <Box sx={{ 
          padding: '0 20px',
          display: { xs: 'flex', md: 'block' },
          flexDirection: 'column'
        }}>
          {/* <Selection label='Destination' items={destinationItems} onChange={handleDestinationChange}/>
          <Selection label='Duration' items={durationItems} onChange={handleDestinationChange} /> */}
          <Selection label='Activity level' items={activityLevelItems}  onChange={handleActivityLevelChange}/>
        </Box>
      </SectionWrapper>
      <ToursList query={query} />
    </Fragment>
  )
}
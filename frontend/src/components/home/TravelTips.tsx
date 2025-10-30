import { TravelTipsType } from '../../types/travelTips';
import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import AccordionItem from './AccordionItem';
import TravelTipsWrapper from './TravelTipsWrapper';
import LoadingSpinner from '../LoadingSpinner';
import useFetch from '../../hooks/useFetch';
import { Box } from '@mui/material';

export default function TravelTips() {
  return (
    <SectionWrapper height='60vh'>
      <TravelTipsWrapper>
        <Title>Travel Tips for Japan</Title>
        <RenderTravelTips />
      </TravelTipsWrapper>
    </SectionWrapper>
  );
}

function RenderTravelTips() {
  const { data, loading, error } = useFetch({ pathname: 'travel-tips' });

  if (loading) return <LoadingSpinner />;
  if (error) return <Box>No Travel Tips Available</Box>;
  if (!data || !data.data || data.data.length === 0) return <Box>No Travel Tips Available</Box>;

  const items: TravelTipsType[] = data.data;
  
  return (
    <>
      {items.map((item: TravelTipsType) => (
        <AccordionItem
          key={item.title}
          topSummary={item.title}
          details={item.content}
        />
      ))}
    </>
  )
}
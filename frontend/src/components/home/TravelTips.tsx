import { useEffect, useState } from 'react';
import { TravelTipsType } from '../../types/travelTips';
import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import AccordionItem from './AccordionItem';
import TravelTipsWrapper from './TravelTipsWrapper';
import LoadingSpinner from '../LoadingSpinner';

export default function TravelTips() {
  return (
    <SectionWrapper>
      <TravelTipsWrapper>
        <Title>Travel Tips for Japan</Title>
        <RenderTravelTips />
      </TravelTipsWrapper>
    </SectionWrapper>
  );
}

function RenderTravelTips() {
  const [items, setItems] = useState<TravelTipsType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    setLoading(true);
    fetch(`${process.env.REACT_APP_API_URI}/travel-tips`)
    .then(res => {
      if (!res.ok) throw new Error('failed to fetch travel tips');
      return res.json();
    })
    .then((data: TravelTipsType[]) => {
      setItems(data)
      setLoading(false);
    })
    .catch(err => {
      setError(err);
      setLoading(false);
    });
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return null;
  if (items.length < 1) return null;
  
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
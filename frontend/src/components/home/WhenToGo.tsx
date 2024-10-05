import { useEffect, useState, useCallback } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Title from '../Title';
import SectionWrapper from '../SectionWrapper';
import WeatherBarChart from './WeatherBarChart';
import { WeatherType } from '../../types/weather';

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function WhenToGo() {
  const [month, setMonth] = useState(0);
  const [items, setItems] = useState<WeatherType[]>();
  const [isInView, setIsInView] = useState(false);
  
  // useCallback caches the function on its initial render
  // cached function becomes the value of sectionRef
  // when rendering <Box ref={sectionRef}> react invokes the function, passing DOM node as argument
  const sectionRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.7 }
      );

      observer.observe(node);
    }
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URI}/weather`)
    .then(res => res.json())
    .then((data: WeatherType[]) => setItems(data));
  }, []);

  if (!items) return <Box>No Data for when to go</Box>

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setMonth(newValue);
  };

  return (
    <SectionWrapper bgColor='#CEE9B7'>
      <Title>When To Go</Title>
      <Box sx={{ width: '100%' }} ref={sectionRef}>
        <Tabs value={month} onChange={handleChange} centered>
          {months.map((month: string) => (
            <Tab label={month} key={month}/>
        ))}
        </Tabs>
        <Box
          sx={{
            p: '30px',
            backgroundColor: 'white',
          }}
        >
          A good time to travel, but there may be some factors to be aware of
          {isInView && <WeatherBarChart weatherdata={items}/>}
        </Box>
      </Box>
    </SectionWrapper>
  )
}
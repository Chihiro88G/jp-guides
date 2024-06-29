import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Title from '../Title';
import SectionWrapper from '../SectionWrapper';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export default function WhenToGo() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionWrapper bgColor='#CEE9B7'>
      <Title>When To Go</Title>
      <Box sx={{ width: '100%' }}>
        <Tabs value={value} onChange={handleChange} centered>
          {months.map(month => (
            <Tab label={month} />
        ))}
        </Tabs>
        <Box>Content here</Box>
      </Box>
    </SectionWrapper>
  )
}
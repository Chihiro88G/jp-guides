import  { ReactNode } from 'react';

import { Box } from '@mui/material';

type SectionWrapperProps = {
  children: ReactNode
  bgColor?: string;
  height?: string;
};

export default function SectionWrapper(props: SectionWrapperProps) {
  const { children, bgColor, height } = props; 

  return (
    <Box sx={{ backgroundColor: `${bgColor ? bgColor : ''}` }}>
      <Box
        sx={{
          display: 'block',
          height: `${height ? height : ''}`,
          backgroundColor: '',
          margin: '0 auto',
          padding: '10px',
        }} 
        maxWidth="lg"
      >
        { children }
      </Box>
    </Box>
  )
}
import  { ReactNode } from 'react';

import { Box } from '@mui/material';

type SectionWrapperProps = {
  children: ReactNode
  bgColor?: string;
  bgImage?: string;
  height?: string;
};

export default function SectionWrapper(props: SectionWrapperProps) {
  const { children, bgColor, bgImage, height } = props; 

  return (
    <Box
      sx={{
        backgroundColor: `${bgColor ? bgColor : ''}`,
        backgroundImage: `${bgImage ? `url(${bgImage})` : ''}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <Box
        sx={{
          display: 'block',
          height: `${height ? height : ''}`,
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
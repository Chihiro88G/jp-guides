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
          minHeight: `${height ? height : ''}`,
          m: '0 auto',
          p: '10px',
        }} 
        maxWidth="lg"
      >
        { children }
      </Box>
    </Box>
  )
}
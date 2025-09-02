import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <Typography
      component="h2"
      variant="h4"
      color="#009688" 
      mb={6}
      mt={6}
      textAlign="center"
    >
      {children}
    </Typography>
  );
}
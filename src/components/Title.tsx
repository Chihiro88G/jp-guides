import { ReactNode } from 'react';
import Typography from '@mui/material/Typography';

interface TitleProps {
  children: ReactNode;
}

export default function Title({ children }: TitleProps) {
  return (
    <Typography
      component="h2"
      variant="h6"
      color="#009688" 
      mb={2}
      textAlign="center"
    >
      {children}
    </Typography>
  );
}
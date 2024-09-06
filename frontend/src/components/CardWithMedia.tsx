import { ReactNode } from 'react';
import { Card, CardMedia } from '@mui/material';

type CardWithMediaProps = {
  children: ReactNode;
  imgUrl: string;
}

export default function CardWithMedia({ children, imgUrl }: CardWithMediaProps) {
  return (
    <Card
      sx={{
        width: { xs: 'inherit', md: '31%'},
        m: '10px',
        borderRadius: '10px',
        ':hover': {
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component='img'
        sx={{ height: 170 }}
        image={imgUrl}
        title="default image"
      />
      {children}
    </Card>
    )
}

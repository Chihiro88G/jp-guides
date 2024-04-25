import * as React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import LikeButton from './LikeButton';

type TourCardProps = {
  cardId: number;
}

export default function TourCard({ cardId }: TourCardProps) {
  const randInt = () => 100 + Math.floor(Math.random() * 100);
  const imgUrl = `https://source.unsplash.com/random/${randInt()} x ${randInt()}?japan`;

  return (
    <Card
      sx={{
        width: '31%',
        margin: '10px',
        borderRadius: '10px',
      }}
    >
      <CardMedia
        component='img'
        sx={{ height: 170 }}
        image={imgUrl}
        title="default image"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Tour Name
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium.
        </Typography>
        <LikeButton cardId={cardId} />
      </CardContent>
      <CardActions>
        <Button size="small">View Tour</Button>
      </CardActions>
    </Card>
    )
}
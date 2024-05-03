import React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import LikeButton from './LikeButton';
import AddToCartButton from './AddToCartButton';
import { useNavigate } from 'react-router-dom';

type TourCardProps = {
  cardId: number;
}

export default function TourCard({ cardId }: TourCardProps) {
  const randInt = () => 100 + Math.floor(Math.random() * 100);
  const imgUrl = `https://source.unsplash.com/random/${randInt()} x ${randInt()}?japan`;

  return (
    <Card
      sx={{
        width: { xs: 'inherit', md: '31%'},
        margin: '10px',
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
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Tour Name
          <LikeButton tourId={cardId} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, accusantium.
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <ViewTourButton tourId={cardId} />
        <AddToCartButton tourId={cardId} />
      </CardActions>
    </Card>
    )
}

type ViewTourButtonProps = {
  tourId: number;
}

function ViewTourButton({ tourId }: ViewTourButtonProps) {
  const navigate = useNavigate();
  const handleViewTour = () => {
    navigate(`/tours/${tourId}`);
  };

  return (
    <Button size="small" onClick={() => handleViewTour()}>View Tour</Button>
  );
}
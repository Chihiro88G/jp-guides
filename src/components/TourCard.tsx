import * as React from 'react';

import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

export default function TourCard() {
  const randInt = () => 100 + Math.floor(Math.random() * 100);
  const imgUrl = `https://source.unsplash.com/random/${randInt()} x ${randInt()}?japan`;

  return (
    <Card
      sx={{ 
        // maxWidth: '300',
        // minWidth: '30%',
        width: '31%',
        margin: '10px',
        borderRadius: '10px'
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
      </CardContent>
      <CardActions>
        <Button size="small">View Tour</Button>
      </CardActions>
    </Card>
    )
}
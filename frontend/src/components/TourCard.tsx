import { useNavigate } from 'react-router-dom';
import { Button, CardActions, CardContent, Typography } from '@mui/material';
import LikeButton from './LikeButton';
import AddToCartButton from './AddToCartButton';
import CardWithMedia from './CardWithMedia';

type TourCardProps = {
  tourData: any;
}

export default function TourCard({ tourData }: TourCardProps) {
  const randInt = () => 100 + Math.floor(Math.random() * 100);
  const imgUrl = `https://source.unsplash.com/random/${randInt()} x ${randInt()}?japan`;

  return (
    <CardWithMedia imgUrl={imgUrl}>
      <CardContent>
        <Typography variant="body1" component="div">
          {tourData.tour_name}
          <LikeButton tourId={tourData.id} />
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {tourData.overview_title}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between' }}>
        <ViewTourButton tourId={tourData.id} />
        <AddToCartButton tourId={tourData.id} />
      </CardActions>
    </CardWithMedia>
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
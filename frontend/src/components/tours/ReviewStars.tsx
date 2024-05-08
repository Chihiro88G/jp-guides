import { Typography } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

export default function ReviewStars() {
  return (
    <Typography>
      <StarIcon sx={{ width: '20px' }}/>
      <StarIcon sx={{ width: '20px' }}/>
      <StarIcon sx={{ width: '20px' }}/>
      <StarIcon sx={{ width: '20px' }}/>
      <StarBorderIcon sx={{ width: '20px' }} />
    </Typography>
  )
}
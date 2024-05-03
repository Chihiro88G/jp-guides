import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from '../slices/likeCountSlice';
import { setLiked, setUnliked } from '../slices/isLikedSlice';

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type LikeButtonTypes = {
  tourId: number;
  isDetail?: boolean;
}

export default function LikeButton({ tourId, isDetail }: LikeButtonTypes) {
  const isLiked = useSelector((state: any) => state.isLiked[tourId]);

  const dispatch = useDispatch();

  const handleLike = () => {
    if (isLiked) {
      dispatch(decrementLike());
      dispatch(setUnliked(tourId));
    } else {
      dispatch(incrementLike())
      dispatch(setLiked(tourId));
    }
  }

  return (
    <IconButton 
      aria-label="like"
      color='secondary'
      onClick={() => handleLike()}
      sx={{
        // position: 'relarive',
        bottom: isDetail ? '-15px' : '5px',
        left: isDetail ? '0' : '56%',
        
      }}
    >
      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
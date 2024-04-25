import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { incrementLike, decrementLike } from '../slices/likeCountSlice';
import { setLiked, setUnliked } from '../slices/isLikedSlice';

import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

type LikeButtonTypes = {
  cardId: number;
}

export default function LikeButton({ cardId }: LikeButtonTypes) {
  const isLiked = useSelector((state: any) => state.isLiked[cardId]);

  const dispatch = useDispatch();

  const handleLike = () => {
    if (isLiked) {
      dispatch(decrementLike());
      dispatch(setUnliked(cardId));
    } else {
      dispatch(incrementLike())
      dispatch(setLiked(cardId));
    }
  }

  return (
    <IconButton 
      aria-label="like"
      color='secondary'
      onClick={() => handleLike()}
      sx={{
        position: 'relarive',
        bottom: '90px',
        left: '297px',
      }}
    >
      {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
    </IconButton>
  );
}
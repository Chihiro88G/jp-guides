import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { incrementCartItem, decrementCartItem } from '../slices/cartCountSlice';
import { setAddedToCart, setRemovedFromCart } from '../slices/isInCartSlice';

import { Button } from '@mui/material';

type LikeButtonTypes = {
  cardId: number;
}

export default function AddToCartButton({ cardId }: LikeButtonTypes) {
  const isInCart = useSelector((state: any) => state.isInCart[cardId]);

  const dispatch = useDispatch();

  const handleCart = () => {
    if (isInCart) {
      dispatch(decrementCartItem());
      dispatch(setRemovedFromCart(cardId));
    } else {
      dispatch(incrementCartItem())
      dispatch(setAddedToCart(cardId));
    }
  }

  return (
    <Button
      size="small"
      onClick={() => handleCart()}
    >
      {isInCart ? 'Added' : 'Add'} to Cart
    </Button>
  );
}
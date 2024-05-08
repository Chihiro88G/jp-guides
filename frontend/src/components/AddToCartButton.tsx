import { useDispatch, useSelector } from 'react-redux';
import { incrementCartItem, decrementCartItem } from '../slices/cartCountSlice';
import { setAddedToCart, setRemovedFromCart } from '../slices/isInCartSlice';

import { Button } from '@mui/material';

type LikeButtonTypes = {
  tourId: number;
}

export default function AddToCartButton({ tourId }: LikeButtonTypes) {
  const isInCart = useSelector((state: any) => state.isInCart[tourId]);

  const dispatch = useDispatch();

  const handleCart = () => {
    if (isInCart) {
      dispatch(decrementCartItem());
      dispatch(setRemovedFromCart(tourId));
    } else {
      dispatch(incrementCartItem())
      dispatch(setAddedToCart(tourId));
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
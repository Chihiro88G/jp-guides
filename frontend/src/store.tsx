import { configureStore } from '@reduxjs/toolkit';
import likeCountReducer from './slices/likeCountSlice';
import isLikedReducer from './slices/isLikedSlice';
import cartCountReducer from './slices/cartCountSlice';
import isInCartReducer from './slices/isInCartSlice';

const store = configureStore({
  reducer: {
    likeCount: likeCountReducer,
    isLiked: isLikedReducer,

    cartCount: cartCountReducer,
    isInCart: isInCartReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
import { configureStore } from '@reduxjs/toolkit';
import likeCountReducer from './slices/likeCountSlice';
import isLikedReducer from './slices/isLikedSlice';

const store = configureStore({
  reducer: {
    likeCount: likeCountReducer,
    isLiked: isLikedReducer,
  }
});

export default store;
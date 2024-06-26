import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLiked: {},
}

const isLikedSlice = createSlice({
  name: 'isLiked',
  initialState,
  reducers: {
    setLiked: (state: any, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state[cardId] = true;
    },
    setUnliked: (state: any, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state[cardId] = false; 
    },
  },
});

export const { setLiked, setUnliked } = isLikedSlice.actions;
export default isLikedSlice.reducer;
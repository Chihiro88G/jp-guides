import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
}

const likeCountSlice = createSlice({
  name: 'likeCount',
  initialState,
  reducers: {
    incrementLike: (state) => {
      state.value += 1;
    },
    decrementLike: (state) => {
      state.value -= 1;
    },
  }
});

export const { incrementLike, decrementLike } = likeCountSlice.actions;
export default likeCountSlice.reducer;
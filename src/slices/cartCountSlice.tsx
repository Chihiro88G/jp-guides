import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0
}

const likeCountSlice = createSlice({
  name: 'cartCount',
  initialState,
  reducers: {
    incrementCartItem: (state) => {
      state.value += 1;
    },
    decrementCartItem: (state) => {
      state.value -= 1;
    },
  }
});

export const { incrementCartItem, decrementCartItem } = likeCountSlice.actions;
export default likeCountSlice.reducer;
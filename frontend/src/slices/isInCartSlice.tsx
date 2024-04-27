import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isInCart: {},
}

const isInCartSlice = createSlice({
  name: 'isInCart',
  initialState,
  reducers: {
    setAddedToCart: (state: any, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state[cardId] = true;
    },
    setRemovedFromCart: (state: any, action: PayloadAction<number>) => {
      const cardId = action.payload;
      state[cardId] = false; 
    },
  },
});

export const { setAddedToCart, setRemovedFromCart } = isInCartSlice.actions;
export default isInCartSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type InitialState = {
  quantity: number;
  show: boolean;
};

const initialState: InitialState = {
  quantity: 0,
  show: false,
};

const boxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {
    increment: state => {
      if (state.quantity < 10000) {
        state.quantity++;
      }
    },
    decrement: state => {
      if (state.quantity) {
        state.quantity--;
      }
    },
    onChange: (state, action: PayloadAction<string>) => {
      state.quantity = +action.payload;
    },
    onShow: state => {
      state.show = !state.show;
    },
  },
});

export const { increment, decrement, onChange, onShow } = boxSlice.actions;
export default boxSlice.reducer;

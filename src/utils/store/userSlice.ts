import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AuthenticatedUser } from '../validations/auth';

type InitialState = {
  user: AuthenticatedUser | null;
};

const initialState: InitialState = {
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthenticatedUser | null>) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;

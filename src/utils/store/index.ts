import { configureStore } from '@reduxjs/toolkit';

import boxReducer from './boxSlice';

const store = configureStore({
  reducer: {
    box: boxReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

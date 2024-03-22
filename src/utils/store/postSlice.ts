import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Post } from '../api/post';

type InitialState = {
  posts: Post[];
};

const initialState: InitialState = {
  posts: [],
};

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
    deletePost: (state, action: PayloadAction<number>) => {
      state.posts = state.posts.filter(({ id }) => id !== action.payload);
    },
  },
});

export const { setPosts, deletePost } = postSlice.actions;
export default postSlice.reducer;

import { api } from '.';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const postEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getPosts: builder.query<Post[], void>({
      query: () => 'https://jsonplaceholder.typicode.com/posts',
      transformResponse: (baseQueryReturnValue: Post[]) => {
        return baseQueryReturnValue.slice(0, 10);
      },
      providesTags: ['post'],
    }),

    deletePost: builder.mutation<unknown, number>({
      query: postId => ({
        url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['post'],
    }),
  }),
});

export const { useGetPostsQuery, useDeletePostMutation } = postEndpoints;

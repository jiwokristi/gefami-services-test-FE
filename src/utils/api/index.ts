import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000',
  prepareHeaders: headers => {
    const user = localStorage.getItem('user');

    if (user) {
      const token = JSON.parse(user).accessToken;
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

export const api = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['user'],
  // @ts-expect-error we inject endpoints in the relevant api slices (at utils/api).
  endpoints: builder => ({}),
});

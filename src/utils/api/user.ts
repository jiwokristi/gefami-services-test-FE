import { api } from '.';

import { User } from '../validations/auth';

const userEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    getUsers: builder.query<User[], void>({
      query: () => '/user',
    }),
  }),
});

export const { useGetUsersQuery } = userEndpoints;

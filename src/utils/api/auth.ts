import { api } from '.';

import { AuthenticatedUser, User } from '../validations/auth';

const authEndpoints = api.injectEndpoints({
  endpoints: builder => ({
    authenticate: builder.mutation<AuthenticatedUser, User>({
      query: payload => ({
        url: '/authenticate',
        method: 'POST',
        body: payload,
      }),
    }),
  }),
});

export const { useAuthenticateMutation } = authEndpoints;

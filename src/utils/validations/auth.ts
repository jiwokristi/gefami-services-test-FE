import { z } from 'zod';

export const userSchema = z.object({
  username: z
    .string({ required_error: 'Please enter your username.' })
    .min(1, 'Please enter your username.')
    .default(''),
  password: z
    .string({ required_error: 'Please enter your password.' })
    .min(8, 'Password needs to be at least 8 characters long.')
    .default(''),
});

export type User = z.infer<typeof userSchema>;

export type AuthenticatedUser = {
  accessToken: string;
  id: string;
  username: string;
};

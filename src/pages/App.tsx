import { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '../components/Button';
import { Input } from '../components/Input';

import { useAuthenticateMutation } from '../utils/api/auth';
import { useGetUsersQuery } from '../utils/api/user';

import { User, userSchema } from '../utils/validations/auth';

import { useAppDispatch, useAppSelector } from '../utils/hooks/rtk';

import { setUser } from '../utils/store/userSlice';

function App() {
  const { user } = useAppSelector(({ user }) => user);
  const dispatch = useAppDispatch();

  const [currentUser, setCurrentUser] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<User>({
    resolver: zodResolver(userSchema),
    mode: 'onTouched',
  });

  const { data: users } = useGetUsersQuery();

  const [authenticate, { isLoading: isFormLoading, data }] =
    useAuthenticateMutation();

  const submitHandler = async (values: User) => {
    try {
      await authenticate(values);
    } catch (error) {
      console.error('ERROR REGISTER ----->', error);
    }
  };

  useEffect(() => {
    if (data) {
      localStorage.setItem('user', JSON.stringify(data));
      dispatch(setUser(data));
    }
  }, [data, dispatch]);

  const isAuthenticated = useMemo(() => {
    return !!user;
  }, [user]);

  return (
    <section id="App" className="py-96">
      {/* ----- SOAL NO. 9 ----- */}
      <form
        className="mx-auto mb-64 flex w-[50rem] flex-col items-center gap-32"
        noValidate
        onSubmit={handleSubmit(submitHandler)}
      >
        {isAuthenticated ? (
          <>
            <header className="mb-32 self-start">
              <h2 className="heading__secondary">
                Selamat Datang, @{user?.username}!
              </h2>
            </header>
            <Button
              type="button"
              classes="rounded-xl w-full"
              loading={isLoading}
              disabled={isFormLoading}
              onClick={() => {
                localStorage.removeItem('user');
                dispatch(setUser(null));
              }}
            >
              LOGOUT
            </Button>
          </>
        ) : (
          <>
            <Input
              {...register('username')}
              label="Username"
              placeholder="Your username"
              inputClasses="rounded-xl"
              errorMessage={errors?.username?.message}
            />
            <Input
              {...register('password')}
              type="password"
              label="Password"
              placeholder="Your password"
              inputClasses="rounded-xl"
              errorMessage={errors?.password?.message}
            />
            <Button
              classes="rounded-xl w-full"
              loading={isLoading}
              disabled={isFormLoading}
            >
              LOGIN
            </Button>
          </>
        )}
      </form>

      {/* ----- SOAL NO. 2 ----- */}
      <div className="mx-auto flex w-[50rem] items-center justify-center gap-32">
        <span>{currentUser || users?.[0]?.username}</span>
        <Button
          classes="rounded-xl"
          onClick={() => {
            if (users) {
              setCurrentUser(
                users[Math.floor(Math.random() * users.length)].username,
              );
            }
          }}
        >
          ROLL
        </Button>
      </div>
    </section>
  );
}

export default App;

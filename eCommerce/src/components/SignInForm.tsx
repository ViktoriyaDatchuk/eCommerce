import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Logo from './Header/Logo';

interface FormSignIn {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignIn>({ mode: 'all' });

  const onSubmit: SubmitHandler<FormSignIn> = (data) => {
    console.log(data);
  };

  const [visible, setVisible] = useState(false);

  const labelStyleGeneral = 'text-teal-400 text-xl text-left flex flex-col mt-3.5 mx-20';
  const labelStyle = 'text-teal-400 text-xl text-left flex flex-col mt-7 mx-20 relative';
  const inputStyle = 'h-30 rounded-md px-1.5 focus:outline-none';
  const errorStyle = 'text-left text-xs text-red-500 mt-1 mx-20';
  const eye = 'bg-center bg-cover w-5 h-5 absolute right-1.5 top-8 cursor-pointer';
  const openEye = `bg-[url('/bg/bg-eye.svg')] ${eye}`;
  const closeEye = `bg-[url('/bg/bg-close.svg')] ${eye}`;

  const navigate = useNavigate();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-full max-w-lg mx-auto">
      <Logo onClick={() => navigate('/')} />
      <h2 className="mt-10 sm:text-5xl font-light text-teal-400 mb-14 text-4xl">SIGN IN</h2>
      <label htmlFor="email" className={labelStyleGeneral}>
        Email
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value:
                /^(\S([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
              message: 'Invalid email',
            },
          })}
          type="email"
          className={inputStyle}
        />
      </label>
      {errors.email && <div className={errorStyle}>{errors.email.message}</div>}
      <label htmlFor="password" className={labelStyle}>
        Password
        <input
          {...register('password', {
            required: 'Password is required',
            validate: (value) => {
              if (value.match(/\s/)) {
                return 'Invalid password';
              } else if (!value.match(/[A-Z]/)) {
                return 'Password must include at least one uppercase letter';
              } else if (!value.match(/[a-z]/)) {
                return 'Password must include at least one lowercase letter';
              } else if (!value.match(/\d/)) {
                return 'Password must include at least one digit';
              } else {
                return true;
              }
            },
            minLength: {
              value: 8,
              message: 'Password must have at least 8 characters',
            },
          })}
          type={visible ? 'text' : 'password'}
          className={inputStyle}
        />
        <div
          className={visible ? closeEye : openEye}
          onClick={() => setVisible(!visible)}
          onKeyDown={() => setVisible(!visible)}
        />
      </label>
      {errors.password && <div className={errorStyle}>{errors.password.message}</div>}
      <div className="flex gap-3.5 mt-16 mx-auto">
        <Button
          text="Back"
          isPrimary
          onClick={() => {
            navigate(-1);
          }}
        />
        <Button text="Sign In" isPrimary onClick={handleSubmit(onSubmit)} />
      </div>
      <p className="text-orange-400 mt-8">
        If you don&apos;t have an account, you can{' '}
        <button type="button" onClick={() => navigate('/sign-up')} className="underline">
          sign-up here
        </button>
      </p>
    </form>
  );
}

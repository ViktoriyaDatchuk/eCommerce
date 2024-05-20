import { SubmitHandler, useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import Logo from './Header/Logo';
import apiRoot from '../sdk/apiRoot';

export interface FormSignIn {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSignIn>({ mode: 'all' });

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [visible, setVisible] = useState(false);

  const labelStyleGeneral = 'text-teal-400 text-xl text-left flex flex-col mt-3.5 mx-20';
  const labelStyle = 'text-teal-400 text-xl text-left flex flex-col mt-7 mx-20 relative';
  const inputStyle = 'h-30 rounded-md px-1.5 focus:outline-none border-solid border-2';
  const inputValidStyle = `${inputStyle} border-green-500 text-slate-950`;
  const inputErrorStyle = `${inputStyle} text-red-400 border-red-500`;
  const errorStyle = 'self-start text-xs text-red-500 mt-1 ml-1';
  const eye = 'bg-center bg-cover w-4 h-4 absolute right-2 top-9 cursor-pointer';
  const openEye = `bg-[url('/bg/bg-eye.svg')] ${eye}`;
  const closeEye = `bg-[url('/bg/bg-close.svg')] ${eye}`;

  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormSignIn> = (data) => {
    console.log(data);
    apiRoot
      .me()
      .login()
      .post({
        body: {
          email: data.email,
          password: data.password,
        },
      })
      .execute()
      .then((responce) => {
        localStorage.setItem('user', responce.body.customer.id);
        const user = {
          firstName: responce.body.customer.firstName,
          lastName: responce.body.customer.lastName,
        };
        localStorage.setItem('commercetools_user', JSON.stringify(user));
        navigate('/');
      })
      .catch(() => {
        apiRoot
          .customers()
          .get({
            queryArgs: {
              where: [`email="${data.email}"`],
            },
          })
          .execute()
          .then((responce) => {
            if (responce.body.count === 0) {
              setEmailError(true);
            } else {
              setPasswordError(true);
            }
          });
      });
  };

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
            onChange: () => {
              setEmailError(false);
            },
          })}
          type="email"
          className={errors.email || emailError ? inputErrorStyle : inputValidStyle}
        />
        {errors.email && <div className={errorStyle}>{errors.email.message}</div>}
        {emailError && <div className={errorStyle}>User with this email is not registered</div>}
      </label>

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
            onChange: () => {
              setPasswordError(false);
            },
          })}
          type={visible ? 'text' : 'password'}
          className={errors.password || passwordError ? inputErrorStyle : inputValidStyle}
        />
        <div
          className={visible ? closeEye : openEye}
          onClick={() => setVisible(!visible)}
          onKeyDown={() => setVisible(!visible)}
        />
        {errors.password && <div className={errorStyle}>{errors.password.message}</div>}
        {passwordError && <div className={errorStyle}>Incorrect password</div>}
      </label>
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

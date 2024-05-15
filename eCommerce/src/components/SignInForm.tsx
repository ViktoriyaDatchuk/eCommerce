import { useForm } from 'react-hook-form';
import Button from './Button';

interface FormSignIn {
  email: string;
  password: string;
}

export default function SignInForm() {
  const {
    register,
    // handleSubmit,
    formState: { errors },
  } = useForm<FormSignIn>({ mode: 'all' });

  const labelStyleGeneral = 'text-teal-400 text-xl text-left flex flex-col mt-3.5 mx-20';
  const labelStyle = 'text-teal-400 text-xl text-left flex flex-col mt-7 mx-20';
  const inputStyle = 'h-30 rounded-md px-1.5';
  const errorStyle = 'text-left text-xs text-red-500 mt-1 mx-20';

  return (
    <form className="flex flex-col w-full max-w-lg mx-auto">
      <h1 className="text-white sm:text-4xl sm:mb-3 font-semibold text-3xl mb-0.5">
        Kino<span className="font-black text-orange-400">GO-VNO</span>
      </h1>
      <h2 className="sm:text-5xl font-light text-teal-400 mb-14 text-4xl">SIGN IN</h2>
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
          type="password"
          className={inputStyle}
        />
      </label>
      {errors.password && <div className={errorStyle}>{errors.password.message}</div>}
      <div className="flex gap-3.5 mt-16 mx-auto">
        <Button text="Back" isPrimary />
        <Button text="Sign In" isPrimary />
      </div>
      <p className="text-orange-400 mt-8">
        If you don&apos;t have an account, you can{' '}
        <a href="https://www.google.com/" className="underline">
          sign up here
        </a>
      </p>
    </form>
  );
}

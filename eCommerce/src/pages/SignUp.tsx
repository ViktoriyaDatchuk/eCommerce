import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import Button from '../components/Button';
import countryList from '../store/Countries';

interface IFormInput {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  country: string;
  city: string;
  street: string;
  postCode: string;
}

export default function SignUp() {
  const inputStyle = 'h-9 rounded-md px-1.5 border-solid border-2 outline-0';
  const inputStyleShort = 'h-9 rounded-md w-36 px-1.5 border-solid border-2 outline-0';
  const validityStyle = 'valid:border-green-500 valid:text-slate-950 invalid:text-red-400 invalid:border-red-500';
  const labelStyleRegular = 'text-orange-400 text-lg text-left flex flex-col mt-4';
  const labelStyleShort = 'text-orange-400 text-lg text-left flex flex-col';
  const wrapperStyle = 'flex flex-row flex-wrap gap-x-8 mt-4 gap-y-4';
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';
  const errorStyle = 'text-red-400 text-sm';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ shouldUseNativeValidation: true });

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  };

  const [postCodeRegExp, setPostCodeRegExp] = useState('^\\d{4}$');
  const [postCodeFormat, setPostCodeFormat] = useState('NNNN');

  const THIRTEEN_YEARS = 31536000000 * 13;

  return (
    <div className="flex flex-row h-full w-full">
      <div className="hidden lg:flex bg-[url('/bg/bg-signUn.jpg')] h-full bg-center bg-cover lg:max-w-800 w-full" />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-lg md:px-24 mx-auto my-auto">
        <h1 className="text-white text-4xl">
          Kino<span className="font-bold text-orange-400">GO-VNO</span>
        </h1>
        <h2 className="text-5xl text-teal-400">SIGN UP</h2>
        <label htmlFor="email" className={labelStyleRegular}>
          Email
          <input
            type="email"
            /* eslint-disable react/jsx-props-no-spreading */
            {...register('email', {
              required: 'This field is required',
              pattern: {
                value:
                  /* eslint-disable no-useless-escape */
                  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                message: 'Wrong e-mail format',
              },
            })}
            placeholder="example@gmail.com"
            className={`${inputStyle} ${validityStyle}`}
          />
          {errors.email?.message && <p className={errorStyle}>{errors.email?.message}</p>}
        </label>
        <label htmlFor="password" className={labelStyleRegular}>
          Password
          <input
            type="password"
            {...register('password', {
              required: 'This field is required',
              minLength: { value: 8, message: 'Too short password. Min length is 8 characters.' },
              pattern: {
                value: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&\-*]{8,28}$/,
                message:
                  'The password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
              },
            })}
            name="password"
            placeholder="Type your password"
            className={`${inputStyle} ${validityStyle}`}
          />
          {errors.password?.message && <p className={errorStyle}>{errors.password?.message}</p>}
        </label>
        <div className={wrapperStyle}>
          <label htmlFor="firstName" className={labelStyleShort}>
            First Name
            <input
              type="text"
              {...register('firstName', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Name must contain at least one character and no special characters or numbers',
                },
              })}
              id="firstName"
              placeholder="John"
              className={`${inputStyleShort} ${validityStyle}`}
            />
            {errors.firstName?.message && <p className={errorStyle}>{errors.firstName?.message}</p>}
          </label>
          <label htmlFor="lastName" className={labelStyleShort}>
            Last Name
            <input
              type="text"
              {...register('lastName', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'Last name must contain at least one character and no special characters or numbers',
                },
              })}
              id="lastName"
              placeholder="Doe"
              className={`${inputStyleShort} ${validityStyle}`}
            />
            {errors.lastName?.message && <p className={errorStyle}>{errors.lastName?.message}</p>}
          </label>
          <label htmlFor="birthDate" className={labelStyleShort}>
            Date of Birth
            <input
              type="date"
              {...register('birthDate', {
                required: 'This field is required',
              })}
              id="birthDate"
              className={`${inputStyleShort} ${validityStyle}`}
              max={new Date(Date.now() - THIRTEEN_YEARS).toISOString().split('T')[0]}
            />
            {errors.birthDate?.message && <p className={errorStyle}>{errors.birthDate?.message}</p>}
          </label>
        </div>
        <label htmlFor="country" className={`${labelStyleGreen} mt-8 ${validityStyle}`}>
          Country/Region
          <select
            {...register('country', {
              required: 'This field is required',
              pattern: {
                value: /^[A-Za-z]+$/,
                message: 'Select country from list',
              },
            })}
            className={`${inputStyle} ${validityStyle}`}
            defaultValue=" "
            onChange={(e) => {
              const selectedCountry = countryList.find((cntr) => cntr.country === e.target.value)!;
              setPostCodeRegExp(selectedCountry.regex);
              setPostCodeFormat(selectedCountry.format);
            }}
          >
            {countryList.map((el) => (
              <option key={el.country}>{el.country}</option>
            ))}
          </select>
          {errors.country?.message && <p className={errorStyle}>{errors.country?.message}</p>}
        </label>
        <div className={wrapperStyle}>
          <label htmlFor="postalCode" className={labelStyleGreen}>
            Postal Code
            <input
              type="text"
              {...register('postCode', {
                required: 'This field is required',
                validate: (value) => {
                  if (!new RegExp(postCodeRegExp).test(value)) {
                    return `Enter right code format for selected Country. Format: ${postCodeFormat}`;
                  }
                  return true;
                },
              })}
              id="postCode"
              placeholder="247711"
              className={`${inputStyleShort} ${validityStyle}`}
            />
            {errors.postCode?.message && <p className={errorStyle}>{errors.postCode?.message}</p>}
          </label>
          <label htmlFor="city" className={labelStyleGreen}>
            City
            <input
              type="text"
              {...register('city', {
                required: 'This field is required',
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: 'City name must contain at least one character and no special characters or numbers',
                },
              })}
              id="city"
              placeholder="Washington"
              className={`${inputStyleShort} ${validityStyle}`}
            />
            {errors.city?.message && <p className={errorStyle}>{errors.city?.message}</p>}
          </label>
        </div>
        <label htmlFor="street" className={`${labelStyleGreen} ${validityStyle} mt-4`}>
          Street
          <input
            type="text"
            {...register('street', {
              required: 'This field is required',
              pattern: {
                value: /^(?=.*).+$/,
                message: 'Street must contain at least one character',
              },
            })}
            id="street"
            placeholder="Type your street"
            className={`${inputStyle} ${validityStyle}`}
          />
          {errors.street?.message && <p className={errorStyle}>{errors.street?.message}</p>}
        </label>
        <div className="flex gap-x-8 mt-12 mx-auto">
          <Button text="back" isPrimary onClick={() => {}} />
          <Button text="Sign Up" isPrimary onClick={handleSubmit(onSubmit)} />
        </div>
      </form>
    </div>
  );
}

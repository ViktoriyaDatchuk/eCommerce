import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import countryList from '../store/Countries';
import Logo from '../components/Header/Logo';
import { sighUpUser } from '../user/userAuth';

export interface IFormInput {
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

/* eslint-disable no-shadow */
enum ErrorMessagesReg {
  REQUIRED = 'This field is required',
  WRONG_EMAIL_FORMAT = 'Wrong e-mail format',
  PASSWORD_LENGTH = 'Too short password. Min length is 8 characters.',
  PASSWORD_FORMAT = 'The password must contain minimum 8 characters, at least 1 uppercase letter, 1 lowercase letter, and 1 number',
  NAME_FORMAT = 'Name must contain at least one character and no special characters or numbers',
  LASTNAME_FORMAT = 'Last name must contain at least one character and no special characters or numbers',
  COUNTRY_SELECT = 'Select country from list',
  POSTCODE_FORMAT = 'Enter right code format for selected Country. Format:',
  CITY_NAME = 'City name must contain at least one character and no special characters or numbers',
  STREET_FORMAT = 'Street must contain at least one character',
}

export default function SignUp() {
  const inputStyle = 'h-9 rounded-md px-1.5 outline-0 border-solid border-2';
  const inputStyleShort = `${inputStyle} w-36`;
  const validStyle = `${inputStyle} border-green-500`;
  const validStyleShort = `${inputStyleShort} border-green-500`;
  const invalidStyle = `${inputStyle} text-slate-950 text-red-400 border-red-500`;
  const invalidStyleShort = `${inputStyleShort} text-slate-950 text-red-400 border-red-500`;
  const labelStyleRegular = 'text-orange-400 text-lg text-left flex flex-col mt-2';
  const labelStyleShort = 'text-orange-400 text-lg text-left flex flex-col';
  const labelStyleCheckbox = 'text-teal-400 flex flex-row mt-4';
  const wrapperStyle = 'flex flex-row flex-wrap gap-x-8 mt-4 gap-y-4';
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';
  const errorStyle = 'text-red-400 text-sm';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({ mode: 'all' });

  const navigate = useNavigate();

  const [postCodeRegExp, setPostCodeRegExp] = useState('^\\d{4}$');
  const [postCodeFormat, setPostCodeFormat] = useState('NNNN');
  const [isDefaultAddress, setIsDefaultAddress] = useState(false);
  const [isSameAddress, setIsSameAddress] = useState(false);
  const [SignUpError, setSignUpError] = useState(false);

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    sighUpUser(data, isDefaultAddress, isSameAddress, navigate, setSignUpError);
  };

  const THIRTEEN_YEARS = 31536000000 * 13;

  return (
    <div className="flex flex-row h-full w-full">
      <div className="hidden lg:flex bg-[url('/bg/bg-signUn.jpg')] h-full bg-center bg-cover lg:max-w-800 w-full" />
      <div className="p-4 flex h-full w-full overflow-hidden">
        <div className="w-full overflow-y-auto flex lg:items-center">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col w-full max-w-lg  mx-auto my-auto ">
            <Logo onClick={() => navigate('/')} />
            <h2 className="mt-4 text-5xl text-teal-400">SIGN UP</h2>
            <label htmlFor="email" className={labelStyleRegular}>
              Email
              <input
                type="email"
                {...register('email', {
                  required: ErrorMessagesReg.REQUIRED,
                  pattern: {
                    value:
                      /* eslint-disable no-useless-escape */
                      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
                    message: ErrorMessagesReg.WRONG_EMAIL_FORMAT,
                  },
                  onChange: () => {
                    setSignUpError(false);
                  },
                })}
                placeholder="example@gmail.com"
                className={errors.email ? invalidStyle : validStyle}
              />
              {errors.email?.message && <p className={errorStyle}>{errors.email?.message}</p>}
              {SignUpError && <div className={errorStyle}>User with this email already exist</div>}
            </label>
            <label htmlFor="password" className={labelStyleRegular}>
              Password
              <input
                type="password"
                {...register('password', {
                  required: ErrorMessagesReg.REQUIRED,
                  minLength: { value: 8, message: ErrorMessagesReg.PASSWORD_LENGTH },
                  pattern: {
                    value: /^(?=.*[0-9])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&\-*]{8,28}$/,
                    message: ErrorMessagesReg.PASSWORD_FORMAT,
                  },
                })}
                name="password"
                placeholder="Type your password"
                className={errors.password ? invalidStyle : validStyle}
              />
              {errors.password?.message && <p className={errorStyle}>{errors.password?.message}</p>}
            </label>
            <div className={`${wrapperStyle} max-w-96`}>
              <label htmlFor="firstName" className={labelStyleShort}>
                First Name
                <input
                  type="text"
                  {...register('firstName', {
                    required: ErrorMessagesReg.REQUIRED,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: ErrorMessagesReg.NAME_FORMAT,
                    },
                  })}
                  id="firstName"
                  placeholder="John"
                  className={errors.firstName ? invalidStyleShort : validStyleShort}
                />
                {errors.firstName?.message && <p className={errorStyle}>{errors.firstName?.message}</p>}
              </label>
              <label htmlFor="lastName" className={labelStyleShort}>
                Last Name
                <input
                  type="text"
                  {...register('lastName', {
                    required: ErrorMessagesReg.REQUIRED,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: ErrorMessagesReg.LASTNAME_FORMAT,
                    },
                  })}
                  id="lastName"
                  placeholder="Doe"
                  className={errors.lastName ? invalidStyleShort : validStyleShort}
                />
                {errors.lastName?.message && <p className={errorStyle}>{errors.lastName?.message}</p>}
              </label>
              <label htmlFor="birthDate" className={labelStyleShort}>
                Date of Birth
                <input
                  type="date"
                  {...register('birthDate', {
                    required: ErrorMessagesReg.REQUIRED,
                  })}
                  id="birthDate"
                  className={errors.birthDate ? invalidStyleShort : validStyleShort}
                  max={new Date(Date.now() - THIRTEEN_YEARS).toISOString().split('T')[0]}
                />
                {errors.birthDate?.message && <p className={errorStyle}>{errors.birthDate?.message}</p>}
              </label>
            </div>
            <label htmlFor="country" className={`${labelStyleGreen} mt-8`}>
              Country/Region
              <select
                {...register('country', {
                  required: ErrorMessagesReg.REQUIRED,
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: ErrorMessagesReg.COUNTRY_SELECT,
                  },
                })}
                className={errors.country ? invalidStyle : validStyle}
                defaultValue=" "
                onChange={(e) => {
                  const selectedCountry = countryList.find((cntr) => cntr.iso === e.target.value)!;
                  setPostCodeRegExp(selectedCountry.regex);
                  setPostCodeFormat(selectedCountry.format);
                }}
              >
                {countryList.map((el) => (
                  <option key={el.country} value={el.iso}>
                    {el.country}
                  </option>
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
                    required: ErrorMessagesReg.REQUIRED,
                    validate: (value) => {
                      if (!new RegExp(postCodeRegExp).test(value)) {
                        return `${ErrorMessagesReg.POSTCODE_FORMAT} ${postCodeFormat}`;
                      }
                      return true;
                    },
                  })}
                  id="postCode"
                  placeholder="247711"
                  className={errors.postCode ? invalidStyleShort : validStyleShort}
                />
                {errors.postCode?.message && <p className={errorStyle}>{errors.postCode?.message}</p>}
              </label>
              <label htmlFor="city" className={labelStyleGreen}>
                City
                <input
                  type="text"
                  {...register('city', {
                    required: ErrorMessagesReg.REQUIRED,
                    pattern: {
                      value: /^[A-Za-z]+$/,
                      message: ErrorMessagesReg.CITY_NAME,
                    },
                  })}
                  id="city"
                  placeholder="Washington"
                  className={errors.city ? invalidStyleShort : validStyleShort}
                />
                {errors.city?.message && <p className={errorStyle}>{errors.city?.message}</p>}
              </label>
            </div>
            <label htmlFor="street" className={`${labelStyleGreen} mt-4`}>
              Street
              <input
                type="text"
                {...register('street', {
                  required: ErrorMessagesReg.REQUIRED,
                  pattern: {
                    value: /^(?=.*).+$/,
                    message: ErrorMessagesReg.STREET_FORMAT,
                  },
                })}
                id="street"
                placeholder="Street"
                className={errors.street ? invalidStyleShort : validStyleShort}
              />
              {errors.street?.message && <p className={errorStyle}>{errors.street?.message}</p>}
            </label>
            <label htmlFor="defaultAddress" className={labelStyleCheckbox}>
              <input
                type="checkbox"
                id="defaultAddress"
                className="mr-2"
                onChange={(e) => {
                  setIsDefaultAddress(e.target.checked);
                }}
              />{' '}
              Set Address as default
            </label>
            <label htmlFor="sameAddress" className={labelStyleCheckbox}>
              <input
                type="checkbox"
                id="sameAddress"
                className="mr-2"
                onChange={(e) => {
                  setIsSameAddress(e.target.checked);
                }}
              />{' '}
              Use same Address for shipping
            </label>
            <div className="flex gap-x-8 mt-12 mx-auto">
              <Button
                text="back"
                isPrimary
                onClick={() => {
                  navigate(-1);
                }}
              />
              <Button text="Sign Up" isPrimary onClick={handleSubmit(onSubmit)} />
            </div>
            <p className="text-orange-400 mt-8">
              Already have an account?{' '}
              <button type="button" onClick={() => navigate('/sign-in')} className="underline">
                sign-in here
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

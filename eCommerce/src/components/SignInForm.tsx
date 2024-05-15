import { useEffect, useState } from 'react';
import Button from './Button';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  //   const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Error! Empty value.');
  //   const [passwordError, setPasswordError] = useState('Error! Empty value.');

  const labelStyleGeneral = 'text-teal-400 text-xl text-left flex flex-col mt-3.5 mx-20';
  const labelStyle = 'text-teal-400 text-xl text-left flex flex-col mt-7 mx-20';
  const inputStyle = 'h-30 rounded-md px-1.5';
  const errorStyle = 'text-xs text-red-700 mt-1';

  useEffect(() => {
    const emailReg =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
    if (email.length === 0) {
      setEmailError('Error! Empty value.');
    } else if (!emailReg.test(email) || email[0] === ' ' || email[email.length - 1] === ' ') {
      setEmailError('Error! Invalid email!');
    } else {
      setEmailError('');
    }
  }, [email]);

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      //   case 'password':
      //     setPasswordDirty(true);
      //     break;
      default:
        break;
    }
  };

  return (
    <form className="flex flex-col w-full max-w-lg mx-auto">
      <h1 className="text-white text-4xl font-semibold mb-3">
        Kino<span className="font-black text-orange-400">GO-VNO</span>
      </h1>
      <h2 className="text-5xl font-light text-teal-400 mb-14">SIGN IN</h2>
      <label htmlFor="email" className={labelStyleGeneral}>
        Email
        <input
          type="email"
          name="email"
          id="email"
          required
          className={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => blurHandler(e)}
        />
        {emailDirty && emailError && <div className={errorStyle}>{emailError}</div>}
      </label>
      <label htmlFor="password" className={labelStyle}>
        Password
        <input
          type="password"
          name="password"
          id="password"
          required
          className={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
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

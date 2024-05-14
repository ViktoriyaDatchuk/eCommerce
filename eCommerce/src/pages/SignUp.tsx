import Button from '../components/Button';

export default function SignUp() {
  const inputStyle = 'h-30 rounded-md px-1.5';
  const inputStyleShort = 'h-30 rounded-md w-36 px-1.5';
  const labelStyleRegular = 'text-orange-400 text-lg text-left flex flex-col mt-4';
  const labelStyleShort = 'text-orange-400 text-lg text-left flex flex-col';
  const wrapperStyle = 'flex flex-row flex-wrap gap-x-8 mt-4 gap-y-4';
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';
  return (
    <div className="flex flex-row h-full w-full">
      <div className="hidden lg:flex bg-[url('/bg/bg-signUn.jpg')] h-full bg-center bg-cover lg:max-w-800 w-full" />
      <form action="" className="flex flex-col w-full max-w-lg md:px-24 mt-8 mx-auto">
        <h1 className="text-white text-4xl">
          Kino<span className="font-bold text-orange-400">GO-VNO</span>
        </h1>
        <h2 className="text-5xl text-teal-400">SIGN UP</h2>
        <label htmlFor="email" className={labelStyleRegular}>
          Email
          <input type="email" name="email" id="email" placeholder="example@gmail.com" required className={inputStyle} />
        </label>
        <label htmlFor="password" className={labelStyleRegular}>
          Password
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Type your password"
            required
            className={inputStyle}
          />
        </label>
        <div className={wrapperStyle}>
          <label htmlFor="firstName" className={labelStyleShort}>
            First Name
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="John"
              required
              className={inputStyleShort}
            />
          </label>
          <label htmlFor="lastName" className={labelStyleShort}>
            Last Name
            <input type="text" name="lastName" id="lastName" placeholder="Doe" required className={inputStyleShort} />
          </label>
          <label htmlFor="birthDate" className={labelStyleShort}>
            Date of Birth
            <input type="date" name="birthDate" id="birthDate" required className={inputStyleShort} />
          </label>
        </div>
        <label htmlFor="country" className={`${labelStyleGreen} mt-8`}>
          Country/Region
          <input type="text" name="country" id="country" placeholder="Unated States" required className={inputStyle} />
        </label>
        <div className={wrapperStyle}>
          <label htmlFor="postalCode" className={labelStyleGreen}>
            Postal Code
            <input
              type="number"
              name="postalCode"
              id="postalCode"
              placeholder="247711"
              required
              className={inputStyleShort}
            />
          </label>
          <label htmlFor="city" className={labelStyleGreen}>
            City
            <input type="text" name="city" id="city" placeholder="Washington" required className={inputStyleShort} />
          </label>
        </div>
        <label htmlFor="street" className={`${labelStyleGreen} mt-4`}>
          Street
          <input type="text" name="street" id="street" placeholder="Type your street" required className={inputStyle} />
        </label>
        <div className="flex gap-x-8 mt-12 mx-auto">
          <Button text="back" isPrimary onClick={() => {}} />
          <Button text="Sign Up" isPrimary onClick={() => {}} />
        </div>
      </form>
    </div>
  );
}

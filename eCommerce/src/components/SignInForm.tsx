import Button from './Button';

export default function SignInForm() {
  const labelStyleGeneral = 'text-teal-400 text-xl text-left flex flex-col mt-3.5 mx-20';
  const labelStyle = 'text-teal-400 text-xl text-left flex flex-col mt-7 mx-20';
  const inputStyle = 'h-30 rounded-md px-1.5';

  return (
    <form className="flex flex-col w-full max-w-lg mx-auto">
      <h1 className="text-white text-4xl font-semibold mb-3">
        Kino<span className="font-black text-orange-400">GO-VNO</span>
      </h1>
      <h2 className="text-5xl font-light text-teal-400 mb-14">SIGN IN</h2>
      <label htmlFor="email" className={labelStyleGeneral}>
        Email
        <input type="email" name="email" id="email" required className={inputStyle} />
      </label>
      <label htmlFor="password" className={labelStyle}>
        Password
        <input type="password" name="password" id="password" required className={inputStyle} />
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

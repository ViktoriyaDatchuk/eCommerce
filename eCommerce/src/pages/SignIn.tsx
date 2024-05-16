import SignInForm from '../components/SignInForm';

export default function SignIn() {
  return (
    <div className="flex w-full h-full items-center">
      <div className="bg-[url('/bg/bg-signIn.jpg')] h-full w-full max-w-[731px] max-h-[800px] bg-center bg-cover" />
      <SignInForm />
    </div>
  );

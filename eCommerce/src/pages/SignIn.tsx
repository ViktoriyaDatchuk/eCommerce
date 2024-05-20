import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SignInForm from '../components/SignInForm';

export default function SignIn() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem('commercetools_user');
    if (user) {
      navigate('/');
    }
  }, [navigate]);
  return (
    <div className="flex w-full h-full items-center">
      <div className="bg-[url('/bg/bg-signIn.jpg')] h-full w-full max-w-[731px] max-h-[800px] bg-center bg-cover" />
      <SignInForm />
    </div>
  );
}

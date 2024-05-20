import { useNavigate } from 'react-router-dom';
import Button from '../../Button';

export default function LogOut() {
  const navigate = useNavigate();
  return (
    <>
      <Button text="sign in" isPrimary onClick={() => navigate('/sign-in')} />
      <Button text="sign up" isPrimary onClick={() => navigate('/sign-up')} />
    </>
  );
}

import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import CartLogo from '../CartLogo';

export default function LogOut() {
  const navigate = useNavigate();
  return (
    <>
      <CartLogo onClick={() => navigate('/cart')} />
      <Button text="sign in" isPrimary onClick={() => navigate('/sign-in')} />
      <Button text="sign up" isPrimary onClick={() => navigate('/sign-up')} />
    </>
  );
}

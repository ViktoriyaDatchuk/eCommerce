import { useNavigate } from 'react-router-dom';
import Button from '../Button';

export default function Profil() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-5">
      <Button text="sign in" isPrimary onClick={() => navigate('/sign-in')} />
      <Button text="sign up" isPrimary onClick={() => navigate('/sign-up')} />
    </div>
  );
}

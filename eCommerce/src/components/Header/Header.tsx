import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Logo from './Logo';
import Profil from './Profil';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between">
      <Logo onClick={() => navigate('/')} />
      <Button text="find a movie" isPrimary={false} onClick={() => navigate('/movie-collection')} />
      <Profil />
    </header>
  );
}

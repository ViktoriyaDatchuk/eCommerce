import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Logo from './Logo';
import Profil from './Profil/Profil';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex justify-between">
      <div className="flex gap-5">
        <Logo onClick={() => navigate('/')} />
        <Button text="find a movie" isPrimary={false} onClick={() => navigate('/movie-collection')} />
      </div>
      <Profil />
    </header>
  );
}

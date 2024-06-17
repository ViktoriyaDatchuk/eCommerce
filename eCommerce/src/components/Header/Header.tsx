import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Logo from './Logo';
import Profil from './Profil/Profil';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-wrap justify-center gap-4 sm:justify-between">
      <div className="flex gap-5">
        <Logo onClick={() => navigate('/')} />
        <Button text="find a movie" isPrimary={false} onClick={() => navigate('/movie-collection')} />
      </div>
      <button type="button" className="text-[#FEA732]" onClick={() => navigate('/about-us')}>
        About us
      </button>
      <Profil />
    </header>
  );
}

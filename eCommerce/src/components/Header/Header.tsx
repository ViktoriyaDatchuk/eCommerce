import { useNavigate } from 'react-router-dom';
import { LineItem } from '@commercetools/platform-sdk';
import Button from '../Button';
import Logo from './Logo';
import Profil from './Profil/Profil';

interface HeaderProps {
  amount?: number;
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Header({ setLineItems, amount }: HeaderProps) {
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
      {setLineItems && amount ? setLineItems && <Profil amount={amount} setLineItems={setLineItems} /> : <Profil />}
    </header>
  );
}

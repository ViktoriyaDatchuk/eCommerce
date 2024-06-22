import { useNavigate } from 'react-router-dom';
import { LineItem } from '@commercetools/platform-sdk';

import Button from '../../Button';
import useCurrentUser from '../../../user/getCurrentUser';
import LoadingModal from '../../LoadingModal';
import CartLogo from '../CartLogo';
import getMoviesFromCart from '../../../pages/Cart/getMoviesFromCart';

interface LogInProps {
  amount?: number;
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function LogIn({ setLineItems, amount }: LogInProps) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('commercetools_user');
    localStorage.removeItem('cartID');
    localStorage.removeItem('cartVersion');
    localStorage.removeItem('lineItems');

    navigate('/');
  };

  const getCart = async () => {
    navigate('/cart');
    const items = await getMoviesFromCart();

    if (items && setLineItems) {
      setLineItems(items);
    }
  };

  const user = useCurrentUser();

  if (!user) return <LoadingModal />;

  return (
    <>
      {amount ? <CartLogo amount={amount} onClick={getCart} /> : <CartLogo onClick={getCart} />}

      <div className="min-w-20">
        <Button
          text={`${user.firstName} ${user.lastName}`}
          isPrimary={false}
          onClick={() => navigate('/profil-info')}
          addClass="bg-transparent text-orange-400 font-normal hover:bg-transparent hover:underline"
        />
      </div>
      <Button text="sign out" isPrimary onClick={logout} />
    </>
  );
}

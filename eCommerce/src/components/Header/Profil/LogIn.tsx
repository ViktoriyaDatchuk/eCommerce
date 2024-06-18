import { useNavigate } from 'react-router-dom';
import { LineItem } from '@commercetools/platform-sdk';

import Button from '../../Button';
import useCurrentUser from '../../../user/getCurrentUser';
import LoadingModal from '../../LoadingModal';
import CartLogo from '../CartLogo';
import getMoviesFromCart from '../../../pages/Cart/getMoviesFromCart';

interface LogInProps {
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function LogIn({ setLineItems }: LogInProps) {
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
    const lineItems = await getMoviesFromCart();

    if (lineItems && setLineItems) {
      setLineItems(lineItems);
    }
  };

  const user = useCurrentUser();

  if (!user) return <LoadingModal />;

  return (
    <>
      <CartLogo onClick={getCart} />
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

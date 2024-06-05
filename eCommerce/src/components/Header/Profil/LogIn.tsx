import { useNavigate } from 'react-router-dom';
import Button from '../../Button';
import useCurrentUser from '../../../user/getCurrentUser';
import LoadingModal from '../../LoadingModal';

export default function LogIn() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('commercetools_user');
    navigate('/');
  };

  const user = useCurrentUser();

  if (!user) return <LoadingModal />;

  return (
    <>
      <div>
        <img src="/disc.png" alt="disc" />
      </div>
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

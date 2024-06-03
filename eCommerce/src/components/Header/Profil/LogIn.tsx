import { useNavigate } from 'react-router-dom';
import Button from '../../Button';

export default function LogIn() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('commercetools_user');
    navigate('/');
  };

  const userString = localStorage.getItem('commercetools_user');
  const user = userString ? JSON.parse(userString) : null;

  return (
    <>
      <div>
        <img src="/disc.png" alt="disc" />
      </div>
      <div>
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

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
      <div className="flex items-center gap-1 text-white hover:cursor-pointer">
        <p>{user.firstName}</p>
        <p>{user.lastName}</p>
      </div>
      <Button text="sign out" isPrimary onClick={logout} />
    </>
  );
}

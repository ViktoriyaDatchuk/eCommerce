import LogIn from './LogIn';
import LogOut from './LogOut';

export default function Profil() {
  const userName = localStorage.getItem('commercetools_user');

  return (
    <div className="max-w-96 w-full flex justify-end gap-5">
      {userName && <LogIn />}
      {!userName && <LogOut />}
    </div>
  );
}

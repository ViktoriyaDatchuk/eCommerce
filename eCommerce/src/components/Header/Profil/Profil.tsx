import LogIn from './LogIn';
import LogOut from './LogOut';

export default function Profil() {
  const userName = localStorage.getItem('commercetools_user');

  return (
    <div className="flex justify-end items-center gap-5">
      {userName && <LogIn />}
      {!userName && <LogOut />}
    </div>
  );
}

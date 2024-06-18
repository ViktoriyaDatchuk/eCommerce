import { LineItem } from '@commercetools/platform-sdk';

import LogIn from './LogIn';
import LogOut from './LogOut';

interface ProfilProps {
  setLineItems?: React.Dispatch<React.SetStateAction<LineItem[]>>;
}

export default function Profil({ setLineItems }: ProfilProps) {
  const userData = localStorage.getItem('commercetools_user');

  return (
    <div className="flex justify-end items-center gap-5">
      {userData && <LogIn setLineItems={setLineItems} />}
      {!userData && <LogOut />}
    </div>
  );
}

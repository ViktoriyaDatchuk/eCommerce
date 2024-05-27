import { useNavigate } from 'react-router-dom';
import Button from '../Button';

interface UserProfileInfo {
  first: string | undefined;
  last: string | undefined;
  data: string | undefined;
  email: string | undefined;
}

export default function UserDataInfo({ first, last, data, email }: UserProfileInfo) {
  const navigate = useNavigate();
  return (
    <div className="flex px-6 sm:px-14 flex-col justify-center gap-5">
      <div className="flex flex-col gap-2 text-lg text-left text-orange-400">
        <p>{first}</p>
        <p>{last}</p>
        <p>{data}</p>
        <p>{email}</p>
      </div>
      <div className="flex gap-5">
        <Button text="назад" isPrimary onClick={() => navigate(-1)} />
        <Button text="редактировать" isPrimary onClick={() => navigate('/profil-edit')} />
      </div>
    </div>
  );
}

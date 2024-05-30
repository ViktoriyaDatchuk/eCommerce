import { useNavigate } from 'react-router-dom';

import { faPen } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button';
import EditButton from '../EditButton';

interface ProfileInfo {
  first: string | undefined;
  last: string | undefined;
  data: string | undefined;
  email: string | undefined;
}

export default function ProfileDataInfo({ first, last, data, email }: ProfileInfo) {
  const navigate = useNavigate();
  const editProfile = () => {
    console.log('edit profile');
  };
  return (
    <div className="max-w-96 w-fullflex flex flex-col gap-8 text-lg">
      <div className="flex gap-5">
        <p className="text-xl font-bold text-teal-400">Edit profile</p>
        <EditButton icon={faPen} onClick={editProfile} />
      </div>
      <div className="flex flex-col gap-2 text-left text-orange-400">
        <p>{first}</p>
        <p>{last}</p>
        <p>{data}</p>
        <p>{email}</p>
      </div>
      <div className="flex gap-5">
        <Button text="back" isPrimary onClick={() => navigate(-1)} />
      </div>
    </div>
  );
}

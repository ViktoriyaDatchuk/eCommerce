import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { faPen } from '@fortawesome/free-solid-svg-icons';

import Button from '../Button';
import EditButton from '../EditButton';
import EditProfilModal from '../../pages/Profil/ProfilModal';

interface ProfilInfo {
  first: string | undefined;
  last: string | undefined;
  birthData: string | undefined;
  email: string | undefined;
}

export default function ProfilDataInfo({ first, last, birthData, email }: ProfilInfo) {
  const [isEditProfil, setIsEditProfil] = useState(false);
  const navigate = useNavigate();

  const editProfile = () => {
    setIsEditProfil(true);
  };

  const changePassword = () => {
    console.log('changePass');
  };

  return (
    <div className="max-w-96 w-fullflex flex flex-col gap-8 text-lg">
      {isEditProfil && (
        <EditProfilModal modalName="profile" isOpenModal={isEditProfil} setIsOpenModal={setIsEditProfil} editData />
      )}
      <div className="flex gap-5">
        <p className="text-xl font-bold text-teal-400">Edit profile</p>
        <EditButton icon={faPen} onClick={editProfile} />
      </div>
      <div className="min-h-36 flex flex-col gap-2 text-left text-orange-400">
        <p>{first}</p>
        <p>{last}</p>
        <p>{birthData}</p>
        <p>{email}</p>
      </div>
      <div className="flex gap-5">
        <Button text="back" isPrimary onClick={() => navigate(-1)} />
        <Button text="change password" isPrimary onClick={() => changePassword} />
      </div>
    </div>
  );
}

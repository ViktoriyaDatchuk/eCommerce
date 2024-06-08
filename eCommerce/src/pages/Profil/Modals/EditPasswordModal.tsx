import { useForm } from 'react-hook-form';

import { IFormInput } from '../../SignUp';
import InputModal, { EditProfileModalData } from '../../../components/InputModal';
import Button from '../../../components/Button';
import useCurrentUser from '../../../user/getCurrentUser';
import changePassword from '../../../user/changePassword';

// type EditPassword = Pick<IFormInput, 'password'>;
interface EditPasswordModalProps {
  modalName: string;
  setIsEditPassword: (open: boolean) => void;
}

export default function EditPasswordModal({ modalName, setIsEditPassword }: EditPasswordModalProps) {
  const user = useCurrentUser();

  const onSubmit = (data: EditProfileModalData) => {
    setIsEditPassword(false);

    if (user) {
      changePassword(user.id, user.version, data.currentPassword!, data.newPassword!);
    }
  };
  const { register, handleSubmit } = useForm<Partial<IFormInput>>({});

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h2 className="capitalize text-lg font-bold text-teal-400">{modalName}</h2>
      <div className="flex flex-col gap-5">
        <InputModal type="password" title="currentPassword" register={register} currentPassword />
        <InputModal type="password" title="newPassword" register={register} newPassword />
      </div>
      <div className="flex gap-4">
        <Button text="close" isPrimary onClick={() => setIsEditPassword(false)} />
        <Button text="change" isPrimary submit />
      </div>
    </form>
  );
}

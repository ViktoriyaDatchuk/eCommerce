import { Customer } from '@commercetools/platform-sdk';
import Button from '../../../components/Button';
import InputModal from '../../../components/InputModal';

interface EditProfileDataProps {
  userData: Customer;
  modalName: string;
  setIsOpenModal: (open: boolean) => void;
}

export default function EditProfileData({ userData, modalName, setIsOpenModal }: EditProfileDataProps) {
  return (
    <form action="" className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">Edit {modalName}</h2>
      <div className="flex flex-col gap-4">
        <InputModal type="text" title="first name" value={userData?.firstName} />
        <InputModal type="text" title="last name" value={userData?.lastName} />
        <InputModal type="date" title="date of birth" value={userData?.dateOfBirth} />
        <InputModal type="email" title="email" value={userData?.email} />
      </div>
      <div className="flex gap-5">
        <Button text="close" isPrimary onClick={() => setIsOpenModal(false)} />
        <Button text="submit" isPrimary />
      </div>
    </form>
  );
}

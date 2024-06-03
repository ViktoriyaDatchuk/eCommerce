import { Customer } from '@commercetools/platform-sdk';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import Button from '../../../components/Button';
import InputModal, { EditProfileModalData } from '../../../components/InputModal';
import { IFormInput } from '../../SignUp';
import changeUserData from '../../../user/changeUserData';

interface EditProfileDataProps {
  userData: Customer;
  modalName: string;
  setIsOpenModal: (open: boolean) => void;
}

export default function EditProfileData({ userData, modalName, setIsOpenModal }: EditProfileDataProps) {
  const {
    register,
    handleSubmit,
    reset,
    // formState: { errors },
  } = useForm<Partial<IFormInput>>({
    defaultValues: {
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      birthDate: userData.dateOfBirth,
    },
  });

  useEffect(() => {
    reset({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      birthDate: userData.dateOfBirth,
    });
  }, [userData, reset]);

  const navigate = useNavigate();
  const onSubmit = (data: EditProfileModalData) => {
    changeUserData(userData.id, userData.version, data, navigate);
    setIsOpenModal(false);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">Edit {modalName}</h2>
      <div className="flex flex-col gap-4">
        <InputModal type="text" title="firstName" value={userData.firstName} register={register} />
        <InputModal type="text" title="lastName" value={userData.lastName} register={register} />
        <InputModal type="date" title="birthDate" value={userData.dateOfBirth} register={register} />
        <InputModal type="email" title="email" value={userData.email} register={register} />
      </div>
      <div className="flex gap-5">
        <Button text="close" isPrimary onClick={() => setIsOpenModal(false)} />
        <Button text="submit" isPrimary submit />
      </div>
    </form>
  );
}

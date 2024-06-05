import { useEffect, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../pages/SignUp';

export type EditProfileModalData = Partial<IFormInput>;

interface InputModalProps {
  type: string;
  title:
    | 'email'
    | 'password'
    | 'firstName'
    | 'lastName'
    | 'birthDate'
    | 'country'
    | 'city'
    | 'street'
    | 'postCode'
    | 'currentPassword'
    | 'newPassword';
  value?: string;
  register: UseFormRegister<EditProfileModalData>;
  currentPassword?: boolean;
  newPassword?: boolean;
}

export default function InputModal({ register, type, title, value = '' }: InputModalProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const getTitle = (inputTitle: string) => {
    switch (inputTitle) {
      case 'firstName':
        return 'first name';
      case 'lastName':
        return 'last name';
      case 'birthDate':
        return 'date of birth';
      case 'currentPassword':
        return 'current password';
      case 'newPassword':
        return 'new password';
      default:
        return inputTitle;
    }
  };

  const newTitle = getTitle(title);

  return (
    <label htmlFor={newTitle} className="flex flex-col">
      <div className="flex gap-2 capitalize text-orange-400">{newTitle}</div>
      <input
        {...register(title, {
          required: 'It is reqired field',
          // pattern: {
          //   value: /^[A-Za-z0-9]+$/,
          //   message: 'Should contain',
          // },
        })}
        className="px-1 rounded-sm"
        type={type}
        id={newTitle}
        placeholder={`Enter ${newTitle}`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </label>
  );
}

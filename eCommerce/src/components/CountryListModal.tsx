import { UseFormRegister } from 'react-hook-form';
import countryList from '../store/Countries';
import { EditProfileModalData } from './InputModal';

interface CountryListModalProps {
  defaultValue: string;
  register: UseFormRegister<EditProfileModalData>;
}

export default function CountryListModal({ defaultValue, register }: CountryListModalProps) {
  const labelStyleGreen = 'text-teal-400 text-lg text-left flex flex-col';

  return (
    <label htmlFor="country" className={`${labelStyleGreen} mt-8`}>
      Country/Region
      <select
        {...register('country', {
          // required: ErrorMessagesReg.REQUIRED,
          pattern: {
            value: /^[A-Za-z]+$/,
            message: '!!!ERROR COUNTRY',
          },
        })}
        defaultValue={defaultValue}
      >
        {countryList.map((el) => (
          <option key={el.country} value={el.iso}>
            {el.country}
          </option>
        ))}
      </select>
    </label>
  );
}

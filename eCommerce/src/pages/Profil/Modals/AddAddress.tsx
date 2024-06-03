import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../components/Button';
import CheckBoxModal from '../../../components/CheckBoxModal';
import CountryListModal from '../../../components/CountryListModal';
import InputModal, { EditProfileModalData } from '../../../components/InputModal';
import { IFormInput } from '../../SignUp';

interface AddAddressProps {
  modalName: string;
  setIsOpenModal: (open: boolean) => void;
  billing?: boolean;
  shipping?: boolean;
  billingDefault?: boolean;
  shippingDefault?: boolean;
  country?: string;
  city?: string;
  postalCode?: string;
  street?: string;
}

export default function AddAddress({
  modalName,
  setIsOpenModal,
  billing = true,
  shipping = false,
  billingDefault = false,
  shippingDefault = false,
  country,
  city,
  postalCode,
  street,
}: AddAddressProps) {
  const [isBillingChecked, setIsBillingChecked] = useState(billing);
  const [isShippingChecked, setIsShippingChecked] = useState(shipping);
  const [isBillingDefault, setIsBillingDefault] = useState(billingDefault && billing);
  const [isShippingDefault, setIsShippingDefault] = useState(shippingDefault && shipping);

  const handleBilling = () => {
    const newBillingChecked = !isBillingChecked;
    setIsBillingChecked(newBillingChecked);
    if (newBillingChecked) {
      setIsShippingChecked(false);
      setIsShippingDefault(false);
    } else {
      setIsBillingDefault(false);
      setIsShippingChecked(true);
    }
  };

  const handleShipping = () => {
    const newShippingChecked = !isShippingChecked;
    setIsShippingChecked(newShippingChecked);
    if (newShippingChecked) {
      setIsBillingChecked(false);
      setIsBillingDefault(false);
    } else {
      setIsShippingDefault(false);
      setIsBillingChecked(true);
    }
  };

  const handleBillingDefault = () => {
    if (isBillingChecked) {
      setIsBillingDefault(!isBillingDefault);
    }
  };

  const handleShippingDefault = () => {
    if (isShippingChecked) {
      setIsShippingDefault(!isShippingDefault);
    }
  };

  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    // formState: { errors },
  } = useForm<Partial<IFormInput>>({});

  useEffect(() => {
    setValue('isBilling', isBillingChecked);
    setValue('isShipping', isShippingChecked);
    setValue('isBillingDefault', isBillingDefault);
    setValue('isShippingDefault', isShippingDefault);
  }, [isBillingChecked, isShippingChecked, isBillingDefault, isShippingDefault, setValue]);

  const onSubmit = (data: EditProfileModalData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">{modalName}</h2>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <CheckBoxModal name="Billing" checked={isBillingChecked} onChange={handleBilling} />
          <CheckBoxModal
            name="Default"
            onChange={handleBillingDefault}
            checked={isBillingDefault}
            disabled={!isBillingChecked}
          />
        </div>
        <div className="w-full flex justify-between">
          <CheckBoxModal name="Shipping" checked={isShippingChecked} onChange={handleShipping} />
          <CheckBoxModal
            onChange={handleShippingDefault}
            name="Default"
            checked={isShippingDefault}
            disabled={!isShippingChecked}
          />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <CountryListModal defaultValue={country || ''} />
        <InputModal type="text" title="city" value={city || ''} register={register} />
        <InputModal type="text" title="postCode" value={postalCode || ''} register={register} />
        <InputModal type="text" title="street" value={street || ''} register={register} />
      </div>
      <div className="flex gap-5">
        <Button text="close" isPrimary onClick={() => setIsOpenModal(false)} />
        <Button text="submit" isPrimary submit />
      </div>
    </form>
  );
}

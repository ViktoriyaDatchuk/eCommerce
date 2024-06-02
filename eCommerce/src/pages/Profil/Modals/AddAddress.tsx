import { useState } from 'react';
import Button from '../../../components/Button';
import CheckBoxModal from '../../../components/CheckBoxModal';
import CountryListModal from '../../../components/CountryListModal';
import InputModal from '../../../components/InputModal';

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
  billing,
  shipping,
  billingDefault,
  shippingDefault,
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

  return (
    <form action="" className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">{modalName}</h2>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <CheckBoxModal
            name="Billing"
            checked={isBillingChecked}
            onChange={handleBilling}
            disabled={isShippingChecked}
          />
          <CheckBoxModal
            name="Default"
            onChange={handleBillingDefault}
            checked={isBillingDefault}
            disabled={!isBillingChecked}
          />
        </div>
        <div className="w-full flex justify-between">
          <CheckBoxModal
            name="Shipping"
            checked={isShippingChecked}
            onChange={handleShipping}
            disabled={isBillingChecked}
          />
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
        <InputModal type="text" title="city" value={city || ''} />
        <InputModal type="text" title="postalCode" value={postalCode || ''} />
        <InputModal type="text" title="street" value={street || ''} />
      </div>
      <div className="flex gap-5">
        <Button text="close" isPrimary onClick={() => setIsOpenModal(false)} />
        <Button text="submit" isPrimary submit />
      </div>
    </form>
  );
}

import Button from '../../../components/Button';
import CheckBoxModal from '../../../components/CheckBoxModal';
import CountryListModal from '../../../components/CountryListModal';
import InputModal from '../../../components/InputModal';

interface AddAddressProps {
  modalName: string;
  setIsOpenModal: (open: boolean) => void;
}

export default function AddAddress({ modalName, setIsOpenModal }: AddAddressProps) {
  return (
    <form action="" className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">Add {modalName}</h2>
      <div className="w-full">
        <div className="w-full flex justify-between">
          <CheckBoxModal name="Billing" />
          <CheckBoxModal name="Default" />
        </div>
        <CheckBoxModal name="Shipping" />
      </div>
      <div className="flex flex-col gap-4">
        <CountryListModal />
        <InputModal type="text" title="city" />
        <InputModal type="text" title="postalCode" />
        <InputModal type="text" title="street" />
      </div>
      <div className="flex gap-5">
        <Button text="close" isPrimary onClick={() => setIsOpenModal(false)} />
        <Button text="submit" isPrimary submit />
      </div>
    </form>
  );
}

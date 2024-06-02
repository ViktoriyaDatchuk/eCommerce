import Button from '../../../components/Button';
import InputModal from '../../../components/InputModal';

interface AddAddressProps {
  modalName: string;
  setIsOpenModal: (open: boolean) => void;
}

export default function AddAddress({ modalName, setIsOpenModal }: AddAddressProps) {
  return (
    <form action="" className="flex flex-col gap-5">
      <h2 className="text-xl font-bold text-teal-400">Add {modalName}</h2>
      <div className="flex flex-col gap-4">
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

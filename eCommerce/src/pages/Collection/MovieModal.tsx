import Modal from 'react-modal';
import Button from '../../components/Button';

interface AddMovieModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
}

export default function AddMovieModal({ isOpenModal, setIsOpenModal }: AddMovieModalProps) {
  return (
    <Modal
      isOpen={isOpenModal}
      className="max-w-80 w-full flex flex-col gap-5 p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
      overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-black bg-opacity-80 z-50"
    >
      <div className="text-lg font-bold uppercase text-orange-400 text-center">
        <p>please Sing-in or Sign-Up</p>
        <p>to add movie to cart</p>
      </div>
      <Button text="back" isPrimary onClick={() => setIsOpenModal(false)} />
    </Modal>
  );
}

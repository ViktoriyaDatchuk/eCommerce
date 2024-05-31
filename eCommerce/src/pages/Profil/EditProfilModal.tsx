import Modal from 'react-modal';

import Button from '../../components/Button';
import InputModal from '../../components/InputModal';
import useCurrentUser from '../../user/getCurrentUser';

interface EditProfilModalProps {
  modalName: string;
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
}

export default function EditProfilModal({ modalName, isOpenModal, setIsOpenModal }: EditProfilModalProps) {
  Modal.setAppElement('#root');
  const userData = useCurrentUser();

  if (!userData) {
    return (
      <Modal
        className="max-w-lg p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
        overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-black bg-opacity-70 z-50"
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      >
        <h2 className="text-xl font-bold text-teal-400">Loading...</h2>
      </Modal>
    );
  }

  return (
    <Modal
      className="max-w-lg p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
      overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-black bg-opacity-80 z-50"
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
    >
      <form action="" className="flex flex-col gap-5">
        <h2 className="text-xl font-bold text-teal-400">Edit {modalName} </h2>
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
    </Modal>
  );
}

import Modal from 'react-modal';

interface LoadingModalProps {
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
}

export default function LoadingModal({ isOpenModal, setIsOpenModal }: LoadingModalProps) {
  Modal.setAppElement('#root');
  return (
    <Modal
      className="max-w-lg p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
      overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-gray-900 bg-opacity-70 z-50"
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
    >
      <h2 className="text-xl font-bold text-teal-400">Loading...</h2>
    </Modal>
  );
}

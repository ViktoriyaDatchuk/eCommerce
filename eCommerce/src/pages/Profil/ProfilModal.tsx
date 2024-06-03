import Modal from 'react-modal';

import useCurrentUser from '../../user/getCurrentUser';
import LoadingModal from '../../components/LoadingModal';

import AddAddress from './Modals/AddAddress';
import EditProfileData from './Modals/EditProfileData';

interface EditProfilModalProps {
  modalName: string;
  isOpenModal: boolean;
  setIsOpenModal: (open: boolean) => void;
  editData?: boolean;
  editAddress?: boolean;
  addAddress?: boolean;
  shipping?: boolean;
  billing?: boolean;
  billingDefault?: boolean;
  shippingDefault?: boolean;
}

export default function ProfilModal({
  modalName,
  isOpenModal,
  setIsOpenModal,
  editData,
  editAddress,
  addAddress,
  shipping,
  billing,
  billingDefault,
  shippingDefault,
}: EditProfilModalProps) {
  const userData = useCurrentUser();

  if (!userData) {
    return <LoadingModal />;
  }

  return (
    <Modal
      className="max-w-80 w-full p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
      overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-black bg-opacity-80 z-50"
      isOpen={isOpenModal}
      onRequestClose={() => setIsOpenModal(false)}
    >
      {editData && <EditProfileData userData={userData} modalName={modalName} setIsOpenModal={setIsOpenModal} />}
      {addAddress && <AddAddress modalName={modalName} setIsOpenModal={setIsOpenModal} />}
      {editAddress && (
        <AddAddress
          modalName={modalName}
          setIsOpenModal={setIsOpenModal}
          shipping={shipping}
          billing={billing}
          billingDefault={billingDefault}
          shippingDefault={shippingDefault}
          edit
        />
      )}
    </Modal>
  );
}

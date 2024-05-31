import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import Modal from 'react-modal';
import { useState } from 'react';

import Page from '../../components/Page';
import UserAdress from '../../components/Profile-data/ProfilAddressInfo';
import ProfilDataInfo from '../../components/Profile-data/ProfilData';

import EditButton from '../../components/EditButton';
import useCurrentUser from '../../user/getCurrentUser';

export default function ProfilInfo() {
  const userData = useCurrentUser();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const addAddress = () => {
    console.log('add Address');
  };
  if (!userData) {
    return (
      <Modal
        className="max-w-lg p-5 bg-gray-900 inset-x-0 rounded-md outline-none"
        overlayClassName="p-8 fixed flex justify-center items-center inset-0 bg-gray-900 z-50"
        isOpen={isOpenModal}
        onRequestClose={() => setIsOpenModal(false)}
      >
        <h2 className="text-xl font-bold text-teal-400">Loading...</h2>
      </Modal>
    );
  }

  return (
    <Page className="w-full h-full flex justify-center">
      <div className="max-w-5xl w-full pt-20 flex flex-wrap justify-between">
        <div className="p-8 flex">
          <ProfilDataInfo
            first={userData?.firstName}
            last={userData?.lastName}
            data={userData?.dateOfBirth}
            email={userData?.email}
          />
        </div>
        <div className="p-8 flex flex-col items-start ">
          <div className="flex items-center gap-5">
            <p className="text-xl font-bold text-teal-400">Adresses</p>
            <EditButton icon={faPlus} onClick={addAddress} size="lg" />
          </div>
          <div className="max-h-max overflow-auto">
            <div className="py-8 grow flex flex-col justify-center items-center gap-8">
              <UserAdress country={userData?.addresses[0].country} zipCode="s123" city="Minsk" street="best" />
              <UserAdress country="BLR" zipCode="s123" city="Minsk" street="best" isShipping />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

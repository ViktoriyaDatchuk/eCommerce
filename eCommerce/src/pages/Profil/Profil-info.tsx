import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import { useState } from 'react';

import Page from '../../components/Page';
import UserAdress from '../../components/Profile-data/ProfilAddressInfo';
import ProfilDataInfo from '../../components/Profile-data/ProfilData';

import EditButton from '../../components/EditButton';
import useCurrentUser from '../../user/getCurrentUser';
import LoadingModal from './LoadingModal';

export default function ProfilInfo() {
  const userData = useCurrentUser();
  const [isOpenModal, setIsOpenModal] = useState(true);

  const addAddress = () => {
    console.log('add Address');
  };

  if (!userData) {
    return <LoadingModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />;
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
              {userData?.addresses.map((address) => {
                return (
                  <UserAdress
                    key={address.id}
                    country={address.country}
                    zipCode={address.postalCode}
                    city={address.city}
                    street={address.streetName}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

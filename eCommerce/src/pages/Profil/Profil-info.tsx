import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { useState } from 'react';
import { Address } from '@commercetools/platform-sdk';

import Page from '../../components/Page';
import UserAdress from '../../components/Profil-data/ProfilAddress';
import ProfilDataInfo from '../../components/Profil-data/ProfilData';

import EditButton from '../../components/EditButton';
import useCurrentUser from '../../user/getCurrentUser';
import LoadingModal from '../../components/LoadingModal';
import EditProfilModal from './ProfilModal';

export default function ProfilInfo() {
  const userData = useCurrentUser();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isAddAddress, setIsAddAddress] = useState(false);

  const addAddress = () => {
    setIsAddAddress(true);
  };

  if (!userData && !isOpenModal) {
    return <LoadingModal isOpenModal setIsOpenModal={setIsOpenModal} />;
  }

  return (
    <Page className="w-full h-full flex justify-center">
      <div className="max-w-5xl w-full pt-20 flex flex-wrap justify-between">
        {isAddAddress && (
          <EditProfilModal modalName="address" isOpenModal={isAddAddress} setIsOpenModal={setIsAddAddress} addAddress />
        )}
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
            <div className="py-8 grow flex flex-col justify-center items-center gap-4">
              {userData?.addresses.map((address: Address) => {
                if (!address.id) {
                  return null;
                }

                const isBillingAddress = userData.billingAddressIds?.includes(address.id);
                const isShippingAddress = userData.shippingAddressIds?.includes(address.id);
                const isBillingDefault = userData.defaultBillingAddressId === address?.id;
                const isShippingDefault = userData.defaultShippingAddressId === address?.id;

                return (
                  <UserAdress
                    key={address.id}
                    country={address.country}
                    zipCode={address.postalCode}
                    city={address.city}
                    street={address.streetName}
                    billingAddress={isBillingAddress}
                    shippingAddress={isShippingAddress}
                    defaultBilling={isBillingDefault}
                    defaultShipping={isShippingDefault}
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

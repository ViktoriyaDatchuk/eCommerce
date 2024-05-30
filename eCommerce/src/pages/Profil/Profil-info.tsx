import { useEffect, useState } from 'react';
import { Customer } from '@commercetools/platform-sdk';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';

import Page from '../../components/Page';
import UserAdress from '../../components/Profile-data/ProfilAddressInfo';
import ProfilDataInfo from '../../components/Profile-data/ProfilData';
import getCurrentUser from '../../user/getCurrentUser';

export default function ProfilInfo() {
  const [userData, setUserData] = useState<Customer | null>(null);

  useEffect(() => {
    getCurrentUser()?.then((data) => {
      if (data) {
        setUserData(data);
      }
    });
  }, []);
  const user = userData;

  return (
    <Page className="w-full h-full flex justify-center">
      <div className="max-w-5xl w-full pt-20 flex flex-wrap justify-between">
        <div className="p-8 flex">
          <ProfilDataInfo first={user?.firstName} last={user?.lastName} data={user?.dateOfBirth} email={user?.email} />
        </div>
        <div className="p-8 flex flex-col items-start ">
          <div className="flex items-center gap-5">
            <p className="text-xl font-bold text-teal-400">Adresses</p>
            <FontAwesomeIcon icon={faPlus} size="lg" style={{ color: '#fb923c' }} />
          </div>
          <div className="max-h-max overflow-auto">
            <div className="py-8 grow flex flex-col justify-center items-center gap-8">
              <UserAdress country={user?.addresses[0].country} zipCode="s123" city="Minsk" street="best" />
              <UserAdress country="BLR" zipCode="s123" city="Minsk" street="best" isShipping />
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
}

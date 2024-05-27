import { useEffect, useState } from 'react';
import { Customer } from '@commercetools/platform-sdk';
import Page from '../../components/Page';
import UserAdress from '../../components/User/UserAddressInfo';
import UserDataInfo from '../../components/User/UserData';
import getCurrentUser from '../../user/userData';

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
      <div className="max-w-5xl w-full flex flex-wrap justify-center">
        <UserDataInfo first={user?.firstName} last={user?.lastName} data={user?.dateOfBirth} email={user?.email} />
        <div className="grow flex flex-col justify-center items-center gap-8">
          <UserAdress country={user?.addresses[0].country} zipCode="s123" city="Minsk" street="best" />
          <UserAdress country="BLR" zipCode="s123" city="Minsk" street="best" isShipping />
        </div>
      </div>
    </Page>
  );
}

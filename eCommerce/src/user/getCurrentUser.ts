import { useEffect, useState } from 'react';
import { Customer } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

async function getCurrentUser() {
  const user = localStorage.getItem('commercetools_user');

  if (user) {
    const { id } = JSON.parse(user);

    return apiRoot
      .customers()
      .withId({ ID: id })
      .get()
      .execute()
      .then((response) => {
        return response.body;
      })
      .catch((error) => console.error('Error fetching user data:', error));
  } else {
    console.error('User token or data not found in local storage');
  }
  return null;
}

export default function useCurrentUser() {
  const [userData, setUserData] = useState<Customer | null>(null);

  useEffect(() => {
    getCurrentUser()
      .then((data) => {
        if (data) {
          setUserData(data);
        }
      })
      .catch((error: Error) => {
        console.log(`'UseCurrentUser error:'${error}`);
      });
  }, []);

  return userData;
}

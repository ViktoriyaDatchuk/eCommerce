// import { Address, ClientResponse, MyCustomerUpdateAction } from '@commercetools/platform-sdk';
import { Address, ClientResponse } from '@commercetools/platform-sdk';

import apiRoot from '../sdk/apiRoot';
import { FormSignIn } from '../components/SignInForm';
import { IFormInput } from '../pages/SignUp';

const saveUserToLocalStorage = (response: ClientResponse, navigate: (path: string) => void) => {
  const user = {
    id: response.body.customer.id,
    firstName: response.body.customer.firstName,
    lastName: response.body.customer.lastName,
    version: response.body.customer.version,
  };
  localStorage.setItem('commercetools_user', JSON.stringify(user));
  navigate('/');
};

export async function signInUser(
  data: FormSignIn,
  setEmailError: (value: boolean) => void,
  setPasswordError: (value: boolean) => void,
  navigate: (path: string) => void
): Promise<void> {
  apiRoot
    .me()
    .login()
    .post({
      body: {
        email: data.email,
        password: data.password,
      },
    })
    .execute()
    .then((response) => {
      console.log('user SUGN IN');
      saveUserToLocalStorage(response, navigate);
    })
    .catch(() => {
      apiRoot
        .customers()
        .get({
          queryArgs: {
            where: [`email="${data.email}"`],
          },
        })
        .execute()
        .then((response) => {
          if (response.body.count === 0) {
            setEmailError(true);
          } else {
            setPasswordError(true);
          }
        });
    });
}

const getUserAddresses = (userData: IFormInput, isSameAddress: boolean): Address[] => {
  const addresses: Address[] = [
    {
      key: 'address1',
      firstName: userData.firstName,
      lastName: userData.lastName,
      streetName: userData.street,
      postalCode: userData.postCode,
      city: userData.city,
      country: userData.country,
      email: userData.email,
    },
  ];

  if (isSameAddress) {
    addresses.push({
      key: 'address2',
      firstName: userData.firstName,
      lastName: userData.lastName,
      streetName: userData.street,
      postalCode: userData.postCode,
      city: userData.city,
      country: userData.country,
      email: userData.email,
    });
  }
  return addresses;
};

export async function sighUpUser(
  userData: IFormInput,
  isDefaultAddress: boolean,
  isSameAddress: boolean,
  navigate: (path: string) => void,
  setSignUpError: (value: boolean) => void
): Promise<void> {
  const addresses = getUserAddresses(userData, isSameAddress);
  const [billing, shipping] = addresses;

  let defaultBillingAddress;
  let defaultShippingAddress;

  if (isDefaultAddress && billing) {
    defaultBillingAddress = 0;
    if (shipping) {
      defaultShippingAddress = 1;
    }
  }
  apiRoot
    .me()
    .signup()
    .post({
      body: {
        email: userData.email,
        password: userData.password,
        firstName: userData.firstName,
        lastName: userData.lastName,
        dateOfBirth: userData.birthDate,
        addresses,
        defaultBillingAddress,
        defaultShippingAddress,
      },
    })
    .execute()
    .then((response) => {
      console.log('user SUGN UP');
      saveUserToLocalStorage(response, navigate);
    })
    .catch((errors: Error) => {
      if (errors.message === 'There is already an existing customer with the provided email.') {
        setSignUpError(true);
      }
    });
}

// export async function signInUser(
//   data: FormSignIn,
//   setEmailError: (value: boolean) => void,
//   setPasswordError: (value: boolean) => void,
//   navigate: (path: string) => void
// ): Promise<void> {
//   try {
//     const response = await apiRoot
//       .me()
//       .login()
//       .post({
//         body: {
//           email: data.email,
//           password: data.password,
//         },
//       })
//       .execute();

//     console.log('user SIGN IN');
//     saveUserToLocalStorage(response, navigate);
//   } catch (error) {
//     console.error('Error during sign in:', error);

//     const response = await apiRoot
//       .customers()
//       .get({
//         queryArgs: {
//           where: [`email="${data.email}"`],
//         },
//       })
//       .execute();

//     if (response.body.count === 0) {
//       setEmailError(true);
//     } else {
//       setPasswordError(true);
//     }
//   }
// }

// export async function sighUpUser(
//   userData: IFormInput,
//   isDefaultAddress: boolean,
//   isSameAddress: boolean,
//   navigate: (path: string) => void,
//   setSignUpError: (value: boolean) => void
// ): Promise<void> {
//   const addresses = getUserAddresses(userData, isSameAddress);
//   const [billing, shipping] = addresses;

//   let defaultBillingAddress;
//   let defaultShippingAddress;

//   if (isDefaultAddress && billing) {
//     defaultBillingAddress = 0;
//     if (shipping) {
//       defaultShippingAddress = 1;
//     }
//   }

//   try {
//     const response = await apiRoot
//       .me()
//       .signup()
//       .post({
//         body: {
//           email: userData.email,
//           password: userData.password,
//           firstName: userData.firstName,
//           lastName: userData.lastName,
//           dateOfBirth: userData.birthDate,
//           addresses,
//           defaultBillingAddress,
//           defaultShippingAddress,
//         },
//       })

//       .execute();

//     console.log('user SIGN UP');
//     saveUserToLocalStorage(response, navigate);
//   } catch (error) {
//     console.error('Error during sign up:', error);
//     if (error.message === 'There is already an existing customer with the provided email.') {
//       setSignUpError(true);
//     }
//   }
// }

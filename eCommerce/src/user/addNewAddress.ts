import {
  Address,
  CustomerAddBillingAddressIdAction,
  CustomerAddShippingAddressIdAction,
  CustomerSetDefaultBillingAddressAction,
  CustomerSetDefaultShippingAddressAction,
} from '@commercetools/platform-sdk';
import swal from 'sweetalert';

import { AddOrEditAddress } from '../interfaces/address.interface';
import { getCurrentUser } from './getCurrentUser';
import apiRoot from '../sdk/apiRoot';
import { EditProfileModalData } from '../components/InputModal';

export default async function addNewAddress(data: EditProfileModalData, navigate: (path: string) => void) {
  const userData = await getCurrentUser();

  if (!userData) return null;

  const { id, version } = userData;
  const { country, city, postCode, street, isBilling, isShipping, isBillingDefault, isShippingDefault } =
    data as AddOrEditAddress;

  const address: Address = {
    country,
    streetName: street,
    postalCode: postCode,
    city,
  };

  apiRoot
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'addAddress',
            address,
          },
        ],
      },
    })
    .execute()
    .then(async (response) => {
      const addressId = response.body.addresses.find(
        (addr) => addr.streetName === address.streetName && addr.country === address.country
      )?.id;

      const updateActions: (
        | CustomerSetDefaultBillingAddressAction
        | CustomerSetDefaultShippingAddressAction
        | CustomerAddBillingAddressIdAction
        | CustomerAddShippingAddressIdAction
      )[] = [];
      // const updateActions: (CustomerSetDefaultBillingAddressAction | CustomerSetDefaultShippingAddressAction)[] = [];
      if (isBilling && addressId) {
        updateActions.push({
          action: 'addBillingAddressId',
          addressId,
        });
      }

      if (isShipping && addressId) {
        updateActions.push({
          action: 'addShippingAddressId',
          addressId,
        });
      }

      if (addressId) {
        if (isBillingDefault) {
          updateActions.push({
            action: 'setDefaultBillingAddress',
            addressId,
          });
        }

        if (isShippingDefault) {
          updateActions.push({
            action: 'setDefaultShippingAddress',
            addressId,
          });
        }
      }

      apiRoot
        .customers()
        .withId({ ID: id })
        .post({
          body: {
            version: response.body.version,
            actions: updateActions,
          },
        })
        .execute()
        .then(() => {
          swal({
            icon: 'success',
            text: 'Success',
          });
          navigate('/');
          setTimeout(() => {
            navigate('/profil-info');
          }, 0);
        })
        .catch((error: Error) => {
          swal({
            icon: 'error',
            text: error.message,
          });
        });
    });
  return null;
}

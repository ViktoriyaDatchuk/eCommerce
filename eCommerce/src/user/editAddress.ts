import {
  Address,
  CustomerAddBillingAddressIdAction,
  CustomerAddShippingAddressIdAction,
  CustomerRemoveBillingAddressIdAction,
  CustomerRemoveShippingAddressIdAction,
  CustomerSetDefaultBillingAddressAction,
  CustomerSetDefaultShippingAddressAction,
} from '@commercetools/platform-sdk';

import swal from 'sweetalert';
import { AddOrEditAddress } from '../interfaces/address.interface';
import { getCurrentUser } from './getCurrentUser';
import apiRoot from '../sdk/apiRoot';
import { EditProfileModalData } from '../components/InputModal';

export default async function editAddress(
  data: EditProfileModalData,
  addressId: string,
  navigate: (path: string) => void
) {
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
  console.log(address);

  apiRoot
    .customers()
    .withId({ ID: id })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'changeAddress',
            addressId,
            address,
          },
        ],
      },
    })
    .execute()
    .then((response) => {
      const updateActions: (
        | CustomerSetDefaultBillingAddressAction
        | CustomerSetDefaultShippingAddressAction
        | CustomerAddBillingAddressIdAction
        | CustomerAddShippingAddressIdAction
        | CustomerRemoveShippingAddressIdAction
        | CustomerRemoveBillingAddressIdAction
      )[] = [];

      if (isBilling && addressId) {
        if (isShipping) {
          updateActions.push({
            action: 'removeShippingAddressId',
            addressId,
          });
        }
        updateActions.push({
          action: 'addBillingAddressId',
          addressId,
        });
      }

      if (isShipping && addressId) {
        if (isBilling) {
          updateActions.push({
            action: 'removeBillingAddressId',
            addressId,
          });
        }
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

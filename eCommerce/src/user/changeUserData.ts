import { Customer, CustomerUpdate } from '@commercetools/platform-sdk';
import swal from 'sweetalert';
import apiRoot from '../sdk/apiRoot';
import { EditProfileModalData } from '../components/InputModal';

export default function changeUserData(
  customerId: string,
  customerVersion: number,
  data: EditProfileModalData,
  navigate: (path: string) => void
) {
  const { firstName, lastName, email } = data as Customer;

  const updateCustomerData: CustomerUpdate = {
    version: customerVersion,
    actions: [
      {
        action: 'setFirstName',
        firstName,
      },
      {
        action: 'setLastName',
        lastName,
      },
      {
        action: 'setDateOfBirth',
        dateOfBirth: data.birthDate,
      },
      {
        action: 'changeEmail',
        email,
      },
    ],
  };

  apiRoot
    .customers()
    .withId({ ID: customerId })
    .post({
      body: updateCustomerData,
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
}

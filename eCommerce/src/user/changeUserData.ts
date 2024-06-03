import { Customer, CustomerUpdate } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';
import { EditProfileModalData } from '../components/InputModal';

export default function changeUserData(customerId: string, customerVersion: number, data: EditProfileModalData) {
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
    .execute();
}

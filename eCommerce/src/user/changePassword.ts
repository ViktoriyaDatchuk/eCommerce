import { CustomerChangePassword } from '@commercetools/platform-sdk';
import swal from 'sweetalert';
import apiRoot from '../sdk/apiRoot';

export default function changePassword(id: string, version: number, currentPassword: string, newPassword: string) {
  const changePassData: CustomerChangePassword = {
    id,
    version,
    currentPassword,
    newPassword,
  };
  apiRoot
    .customers()
    .password()
    .post({
      body: changePassData,
    })
    .execute()
    .then(() => {
      swal({
        icon: 'success',
        text: 'Success',
      });
    })
    .catch((error: Error) => {
      swal({
        icon: 'error',
        text: error.message,
      });
    });
}

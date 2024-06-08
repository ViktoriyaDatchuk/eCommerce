import swal from 'sweetalert';
import apiRoot from '../sdk/apiRoot';

export default function deleteAddress(
  userId: string,
  addressId: string,
  version: number,
  navigate: (path: string) => void
) {
  apiRoot
    .customers()
    .withId({ ID: userId })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'removeAddress',
            addressId,
          },
        ],
      },
    })
    .execute()
    .then(() => {
      swal({
        icon: 'success',
        text: 'Address was deleted',
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

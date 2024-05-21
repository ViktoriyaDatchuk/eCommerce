import apiRoot from '../sdk/apiRoot';
import { FormSignIn } from '../components/SignInForm';
import { IFormInput } from '../pages/SignUp';

export function signInUser(
  data: FormSignIn,
  setEmailError: (value: boolean) => void,
  setPasswordError: (value: boolean) => void,
  navigate: (path: string) => void
): void {
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
    .then((responce) => {
      localStorage.setItem('user', responce.body.customer.id);
      navigate('/');
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
        .then((responce) => {
          if (responce.body.count === 0) {
            setEmailError(true);
          } else {
            setPasswordError(true);
          }
        });
    });
}

export function sighUpUser(userData: IFormInput, navigate: (path: string) => void) {
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
        addresses: [
          {
            key: 'address1',
            title: '',
            firstName: userData.firstName,
            lastName: userData.lastName,
            streetName: userData.street,
            streetNumber: '12',
            postalCode: '12345',
            city: 'Example City',
            country: userData.country,
            phone: '+312345678',
            mobile: '+312345679',
            email: 'jane.doe@example.com',
          },
        ],
      },
    })
    .execute()
    .then((response) => {
      const user = {
        firstName: response.body.customer.firstName,
        lastName: response.body.customer.lastName,
      };
      localStorage.setItem('commercetools_user', JSON.stringify(user));

      navigate('/');
    })
    .catch(console.error);
}

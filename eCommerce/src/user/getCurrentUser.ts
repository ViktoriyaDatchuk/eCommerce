import apiRoot from '../sdk/apiRoot';

export default async function getCurrentUser() {
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

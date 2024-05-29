import apiRoot from '../sdk/apiRoot';

export default async function getCurrentUser() {
  const user = localStorage.getItem('commercetools_user');

  if (user) {
    const { id } = JSON.parse(user);

    return apiRoot
      .customers()
      .get({
        queryArgs: {
          where: [`id="${id}"`],
        },
      })
      .execute()
      .then((response) => response.body.results[0])
      .catch((error) => console.error('Error fetching user data:', error));
  } else {
    console.error('User token or data not found in local storage');
  }
  return null;
}

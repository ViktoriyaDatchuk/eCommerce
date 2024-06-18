import apiRoot from '../sdk/apiRoot';

export default async function createCard(customerId: string) {
  const newCart = await apiRoot
    .carts()
    .post({
      body: {
        customerId,
        currency: 'EUR',
      },
    })
    .execute();
  localStorage.setItem('cartID', newCart.body.id);
}

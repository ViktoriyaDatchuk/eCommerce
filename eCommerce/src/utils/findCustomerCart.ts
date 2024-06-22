import { Cart } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default async function findCustomerCart(userIdToFind: string): Promise<Cart> {
  const limit = 20;
  let offset = 0;
  const allCarts: Cart[] = [];

  let response = await apiRoot.carts().get({ queryArgs: { limit, offset } }).execute();

  allCarts.push(...response.body.results);

  while (response.body.total && response.body.total > offset + limit) {
    offset += limit;
    // eslint-disable-next-line no-await-in-loop
    response = await apiRoot.carts().get({ queryArgs: { limit, offset } }).execute();
    allCarts.push(...response.body.results);
  }
  const customerCart = allCarts.filter((cart) => cart.customerId === userIdToFind)[0];
  localStorage.setItem('customerCartId', JSON.stringify(customerCart.id));
  return customerCart;
}

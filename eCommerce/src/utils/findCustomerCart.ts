import { Customer } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default async function findCustomerCart(user: Customer) {
  const limit = 20;
  let offset = 0;

  let response = await apiRoot.carts().get({ queryArgs: { limit, offset } }).execute();

  while (response.body.total && response.body.total > offset + limit) {
    const customerCart = response.body.results.find((cart) => cart.customerId === user.id);

    if (customerCart) return customerCart;
    offset += limit;
    // eslint-disable-next-line no-await-in-loop
    response = await apiRoot.carts().get({ queryArgs: { limit, offset } }).execute();
  }

  return null;
}

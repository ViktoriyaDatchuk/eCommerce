import { ConcurrentModificationError } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default async function removeFromCart(lineItemId: string, cartId: string) {
  const cartResponse = await apiRoot.carts().withId({ ID: cartId }).get().execute();
  apiRoot
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version: cartResponse.body.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId,
          },
        ],
      },
    })
    .execute()
    .then((response) => {
      console.log('Product removed from cart:', response.body);
    })
    .catch((error: ConcurrentModificationError) => {
      console.log('409!!!!!!!!!!!!!!!!!!', error.code);
    });
}

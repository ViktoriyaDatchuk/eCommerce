import { Cart } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default function removeFromCart(cart: Cart, productId: string) {
  const currentMovie = cart.lineItems.find((movie) => movie.productId === productId);
  if (!currentMovie) return;
  apiRoot
    .carts()
    .withId({ ID: cart.id })
    .post({
      body: {
        version: cart.version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId: currentMovie.id,
          },
        ],
      },
    })
    .execute()
    .then((response) => {
      console.log('Product removed from cart:', response.body);
    });
}

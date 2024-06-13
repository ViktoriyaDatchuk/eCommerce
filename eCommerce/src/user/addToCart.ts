import { Cart, LineItemDraft } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default function addToCart(cart: Cart, productId: string, variantId: number, quantity: number = 1) {
  const currentMovie = cart.lineItems.find((movie) => movie.productId === productId);

  if (!currentMovie) {
    const lineItemDraft: LineItemDraft = {
      productId,
      variantId,
      quantity,
    };

    apiRoot
      .carts()
      .withId({ ID: cart.id })
      .post({
        body: {
          version: cart.version,
          actions: [
            {
              action: 'addLineItem',
              ...lineItemDraft,
            },
          ],
        },
      })
      .execute()
      .then((response) => {
        console.log('Product added to cart:', response.body);
      });
  }
}

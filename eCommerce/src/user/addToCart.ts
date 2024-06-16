import { LineItemDraft } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default async function addToCart(
  cartId: string,
  version: number,
  productId: string,
  variantId: number,
  quantity: number = 1
) {
  const lineItemDraft: LineItemDraft = {
    productId,
    variantId,
    quantity,
  };
  console.log(version, 'version!');

  const response = apiRoot
    .carts()
    .withId({ ID: cartId })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'addLineItem',
            ...lineItemDraft,
          },
        ],
      },
    })
    .execute();
  console.log('film added');

  return response;
}

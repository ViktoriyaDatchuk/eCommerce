import { LineItemDraft } from '@commercetools/platform-sdk';
import apiRoot from '../sdk/apiRoot';

export default async function addToCart(
  cartID: string,
  productId: string,
  variantId: number,
  version: number,
  quantity: number = 1
) {
  const lineItemDraft: LineItemDraft = {
    productId,
    variantId,
    quantity,
  };

  const response = await apiRoot
    .carts()
    .withId({ ID: cartID })
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
  const { lineItems } = response.body;

  localStorage.setItem('lineItems', JSON.stringify(lineItems));

  return response.body;
}

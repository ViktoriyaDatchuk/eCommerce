import apiRoot from '../sdk/apiRoot';

export default async function removeFromCart(lineItemId: string, cartID: string, version: number) {
  const remove = await apiRoot
    .carts()
    .withId({ ID: cartID })
    .post({
      body: {
        version,
        actions: [
          {
            action: 'removeLineItem',
            lineItemId,
          },
        ],
      },
    })
    .execute();
  console.log('Product removed from cart:', remove.body.version);
  const { lineItems } = remove.body;
  localStorage.setItem('lineItems', JSON.stringify(lineItems));
}

// import apiRoot from '../sdk/apiRoot';

import addToCart from '../user/addToCart';
import removeFromCart from '../user/removeFromCat';

export default async function updateCart(
  productId: string,
  variantId: number,
  action: string,
  cartId: string,
  version: number
) {
  if (action === 'add') {
    await addToCart(cartId, productId, variantId, version);
  } else {
    await removeFromCart(productId, cartId, version);
  }
}

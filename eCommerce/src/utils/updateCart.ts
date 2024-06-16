import apiRoot from '../sdk/apiRoot';
import addToCart from '../user/addToCart';
import removeFromCart from '../user/removeFromCat';

export default async function updateCart(cartId: string, filmId: string, variantId: number, action: string) {
  let cartResponse = await apiRoot.carts().withId({ ID: cartId }).get().execute();
  const cartVersion = cartResponse.body.version;
  const cartID = cartResponse.body.id;
  console.log('line', cartVersion);
  if (action === 'add') {
    console.log();
    await addToCart(cartID, cartVersion, filmId, variantId);
  } else {
    await removeFromCart(filmId, cartId);
  }
  cartResponse = await apiRoot.carts().withId({ ID: cartId }).get().execute();

  console.log('update', cartVersion);
  return cartResponse;
}

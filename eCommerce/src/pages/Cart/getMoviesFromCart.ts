import apiRoot from '../../sdk/apiRoot';

export default async function getMoviesFromCart() {
  const cartID = localStorage.getItem('cartID');
  if (!cartID) return null;
  const cartItems = await apiRoot.carts().withId({ ID: cartID }).get().execute();

  const cartMovies = cartItems.body.lineItems;

  return cartMovies.length > 0 ? cartMovies : [];
}

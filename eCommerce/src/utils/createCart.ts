// import { Customer } from '@commercetools/platform-sdk';
// import apiRoot from '../sdk/apiRoot';

// export default function createOrGetCart(user: Customer) {
//   apiRoot
//     .carts()
//     .get()
//     .execute()
//     .then((resp) => {
//       const customerCart = resp.body;
//       console.log(customerCart);
//       // if (!customerCart) {

//       // } else {
//       //   return customerCart;
//       // }
//       return null;
//     });
// }

// apiRoot
//   .carts()
//   .withCustomerId({ customerId: user.id })
//   .get()
//   .execute()
//   .then(() =>
//     apiRoot
//       .carts()
//       .withCustomerId({ customerId: user.id })
//       .get()
//       .execute()
//       .then((response) => console.log('response cart', response))

//   );

//   apiRoot
//     .carts()
//     .post({
//       body: {
//         customerId: user?.id,
//         currency: 'EUR',
//       },
//     })
//     .execute()
//     .then((response) => {
//       const createdCart = response.body;
//       const cartId = createdCart.id;
//       return console.log('Created cart with ID:', cartId);
//     })
//     .catch((error) => {
//       console.error('Error creating cart:', error);
//     });

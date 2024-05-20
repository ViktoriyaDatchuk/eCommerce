import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import ctpClient from './BuildClient';

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: 'rs_school-ecommerce_app' });

// await apiRoot
//   .me()
//   .signup()
//   .post({
//     body: {
//       email: 'post@ttt.by',
//       password: 'postPost2',
//     },
//   })
//   .execute()
//   .then(console.log)
//   .catch(console.error);

export default apiRoot;

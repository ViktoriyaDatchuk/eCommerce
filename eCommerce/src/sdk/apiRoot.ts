import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import ctpClient from './BuildClient';

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: 'rs_school-ecommerce_app' });

await apiRoot
  .me()
  .signup()
  .post({
    body: {
      email: 'gggg@yy.by',
      password: 'hhhhhh',
    },
  })
  .execute()
  .then(console.log)
  .catch(console.error);

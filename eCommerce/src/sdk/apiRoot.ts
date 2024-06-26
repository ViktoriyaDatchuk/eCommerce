import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';
import ctpClient from './BuildClient';

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({ projectKey: 'rs_school-ecommerce_app' });

export default apiRoot;

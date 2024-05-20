import fetch from 'node-fetch';
import {
  AuthMiddlewareOptions,
  ClientBuilder,
  HttpMiddlewareOptions,
  TokenCache,
  TokenStore,
} from '@commercetools/sdk-client-v2';

const projectKey = 'rs_school-ecommerce_app';
const scopes = [
  'manage_shopping_lists:rs_school-ecommerce_app',
  'manage_my_payments:rs_school-ecommerce_app',
  'create_anonymous_token:rs_school-ecommerce_app',
  'manage_my_shopping_lists:rs_school-ecommerce_app',
  'manage_discount_codes:rs_school-ecommerce_app',
  'manage_tax_categories:rs_school-ecommerce_app',
  'manage_customer_groups:rs_school-ecommerce_app',
  'manage_types:rs_school-ecommerce_app',
  'manage_order_edits:rs_school-ecommerce_app',
  'manage_my_orders:rs_school-ecommerce_app',
  'manage_payments:rs_school-ecommerce_app',
  'manage_products:rs_school-ecommerce_app',
  'manage_project_settings:rs_school-ecommerce_app',
  'manage_shipping_methods:rs_school-ecommerce_app',
  'manage_categories:rs_school-ecommerce_app',
  'introspect_oauth_tokens:rs_school-ecommerce_app',
  'manage_cart_discounts:rs_school-ecommerce_app',
  'manage_customers:rs_school-ecommerce_app',
  'manage_extensions:rs_school-ecommerce_app',
  'manage_orders:rs_school-ecommerce_app',
  'manage_api_clients:rs_school-ecommerce_app',
  'manage_my_profile:rs_school-ecommerce_app',
];

const TockenCashe: TokenCache = {
  get() {
    return JSON.parse(localStorage.getItem('tocken')!);
  },
  set(newToken: TokenStore) {
    localStorage.setItem('token', JSON.stringify(newToken));
  },
};

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: '0UgsBYepjNL8i7aHecX-QIBy',
    clientSecret: 'HqCX_AsxBC1YWdqlQDALkOO1P62oDInn',
  },
  scopes,
  fetch,
  tokenCache: TockenCashe,
};

// const authMiddlewareOptions: AnonymousAuthMiddlewareOptions = {
//   host: 'https://auth.europe-west1.gcp.commercetools.com',
//   projectKey,
//   credentials: {
//     clientId: 'jIig3vjMts54N3ZiNHE7BYwC',
//     clientSecret: 'mvBUNtADbjYcs3QhqTh414A0bLQvbfYY',
//     anonymousId: 'ANONYM6',
//   },
//   scopes,
//   fetch,
// };

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export default ctpClient;

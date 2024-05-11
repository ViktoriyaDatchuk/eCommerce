import fetch from 'node-fetch';
import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

const projectKey = 'rs_school-ecommerce_app';
const scopes = [
  'manage_my_payments:rs_school-ecommerce_app',
  'view_published_products:rs_school-ecommerce_app',
  'create_anonymous_token:rs_school-ecommerce_app',
  'manage_my_shopping_lists:rs_school-ecommerce_app',
  'manage_my_quote_requests:rs_school-ecommerce_app',
  'manage_my_business_units:rs_school-ecommerce_app',
  'manage_my_quotes:rs_school-ecommerce_app',
  'manage_my_orders:rs_school-ecommerce_app',
  'manage_my_profile:rs_school-ecommerce_app',
  'view_categories:rs_school-ecommerce_app',
];

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: 'https://auth.europe-west1.gcp.commercetools.com',
  projectKey,
  credentials: {
    clientId: 'jIig3vjMts54N3ZiNHE7BYwC',
    clientSecret: 'mvBUNtADbjYcs3QhqTh414A0bLQvbfYY',
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: 'https://api.europe-west1.gcp.commercetools.com',
  fetch,
};

const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();

export default ctpClient;

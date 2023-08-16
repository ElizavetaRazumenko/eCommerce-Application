import {
  ClientBuilder,

  // Import middlewares
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

// import fetch from 'node-fetch';
const fetch = require('node-fetch');

const projectKey = 'ecommece-application';
const scopes = [
  'manage_orders:ecommece-application',
  'manage_my_payments:ecommece-application',
  'introspect_oauth_tokens:ecommece-application',
  'view_published_products:ecommece-application',
  'manage_my_business_units:ecommece-application',
  'manage_product_selections:ecommece-application',
  'manage_api_clients:ecommece-application',
  'manage_cart_discounts:ecommece-application',
  'manage_types:ecommece-application',
  'manage_stores:ecommece-application',
  'create_anonymous_token:ecommece-application',
  'manage_customers:ecommece-application',
  'manage_products:ecommece-application',
  'manage_my_profile:ecommece-application',
  'manage_discount_codes:ecommece-application',
  'manage_my_quote_requests:ecommece-application',
  'manage_my_shopping_lists:ecommece-application',
  'manage_payments:ecommece-application',
  'manage_my_quotes:ecommece-application',
  'manage_shipping_methods:ecommece-application',
  'manage_my_orders:ecommece-application',
  'manage_categories:ecommece-application',
];

const region = 'europe-west1.gcp';

// Configure authMiddlewareOptions
const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.${region}.commercetools.com`,
  projectKey: projectKey,
  credentials: {
    clientId: '8VvV2nJIi_nwKsW74B7GO6My',
    clientSecret: 'GyknfAkI5ORsx94DXFW6kYFrLLt6jt-m',
  },
  scopes,
  fetch,
};

// Configure httpMiddlewareOptions
const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://auth.${region}.commercetools.com`,
  fetch,
};

// Export the ClientBuilder
export const ctpClient = new ClientBuilder()
  .withProjectKey(projectKey) // .withProjectKey() is not required if the projectKey is included in authMiddlewareOptions
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware() // Include middleware for logging
  .build();

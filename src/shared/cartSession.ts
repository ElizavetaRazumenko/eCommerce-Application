import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import {
  ClientBuilder,
  type AuthMiddlewareOptions,
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  TokenCache,
  TokenStore,
  TokenCacheOptions,
  AnonymousAuthMiddlewareOptions,
} from '@commercetools/sdk-client-v2';

const fetch = require('node-fetch');
const projectKey = 'ecommece-application';
const scopes = [
  'manage_orders:ecommece-application',
  'manage_my_payments:ecommece-application',
  'manage_my_business_units:ecommece-application',
  'manage_my_quote_requests:ecommece-application',
  'manage_my_quotes:ecommece-application',
  'create_anonymous_token:ecommece-application',
  'manage_my_orders:ecommece-application',
  'manage_customers:ecommece-application',
  'manage_products:ecommece-application',
  'manage_my_profile:ecommece-application',
  'view_categories:ecommece-application',
  'manage_my_shopping_lists:ecommece-application',
];

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.europe-west1.gcp.commercetools.com`,
  fetch,
};

const authMiddlewareOptions: AnonymousAuthMiddlewareOptions = {
  host: `https://auth.europe-west1.gcp.commercetools.com`,
  projectKey: projectKey,
  credentials: {
    clientId: 'oLB6h1y4-7-3C1z5Lvhs0ZVZ',
    clientSecret: 'JlYVEFhja2Oxqa7AyDxNoxklWvLJq-he',
  },
  scopes,
  fetch,
};

const ctpClient = new ClientBuilder()
  .withAnonymousSessionFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: projectKey,
});

// export const getAnonymousCustomer = async () => {
//   const customer = await apiRoot.customers().get().execute();
//   return customer;
// };

export const createAnonymousCarts = async () => {
  // f418c75f-0bbd-4445-87c1-096c77f06dbc
  const cart = await apiRoot
    .me()
    .carts()
    .post({
      body: {
        currency: 'USD',
        country: 'IT',
      },
    })
    .execute();
  localStorage.setItem('idCarts', JSON.stringify(cart.body.id));
  console.log(cart.body.id);
  return cart;
};

export const getCurrentAnonimousCart = async () => {
  if (localStorage.getItem('idCarts')) {
    const id = localStorage.getItem('idCarts')!.slice(1, -1);
    const customer = await apiRoot.carts().withId({ ID: id }).get().execute();
    return customer;
  }
};
export const getAnonymousCarts = async () => {
  const customer = await apiRoot.me().carts().get().execute();
  return customer;
};

export const addProductOnCart = async () => {
  if (localStorage.getItem('idCarts')) {
    const id = localStorage.getItem('idCarts')!.slice(1, -1);
    const version = 4;
    const customer = await apiRoot
      .carts()
      .withId({
        ID: id,
      })
      .post({
        body: {
          version: version,
          actions: [
            {
              action: 'addLineItem',
              sku: 'Drink-M',
            },
          ],
        },
      })
      .execute();
    return customer;
  }
};

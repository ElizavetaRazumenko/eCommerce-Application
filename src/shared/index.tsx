import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import {
  ClientBuilder,
  type AuthMiddlewareOptions, // Required for auth
  type HttpMiddlewareOptions,
  PasswordAuthMiddlewareOptions,
  TokenCache,
  TokenStore,
  TokenCacheOptions,
  // Client,
  // ExistingTokenMiddlewareOptions, // Required for sending HTTP requests
} from '@commercetools/sdk-client-v2';

import { ProductsType, requestCatalogParamsType } from '../types/types';

const fetch = require('node-fetch');

const scopes = [
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

const projectKey = 'ecommece-application';

const authMiddlewareOptions: AuthMiddlewareOptions = {
  host: `https://auth.europe-west1.gcp.commercetools.com`,
  projectKey: projectKey,
  credentials: {
    clientId: 'HgTug4REahFA11dVfXfn2FW3',
    clientSecret: 'vdT50e1NqbdNH6Z2NhExia6lqwFfC8OT',
  },
  scopes,
  fetch,
};

const httpMiddlewareOptions: HttpMiddlewareOptions = {
  host: `https://api.europe-west1.gcp.commercetools.com`,
  fetch,
};

class MyTokenCache implements TokenCache {
  myCache: TokenStore = {
    token: '',
    expirationTime: 0,
    refreshToken: undefined,
  };

  set(newCache: TokenStore, tokenCacheOptions?: TokenCacheOptions) {
    this.myCache = newCache;
  }

  get(tokenCacheOptions?: TokenCacheOptions) {
    return this.myCache;
  }
}

export const myTokenCache = new MyTokenCache();

const defaultClient = new ClientBuilder()
  .withProjectKey(projectKey)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware();

export const getPasswordFlowClient = (email: string, login: string) => {
  const passwordAuthMiddlewareOptions: PasswordAuthMiddlewareOptions = {
    host: `https://auth.europe-west1.gcp.commercetools.com/`,
    projectKey: projectKey,
    credentials: {
      clientId: 'HgTug4REahFA11dVfXfn2FW3',
      clientSecret: 'vdT50e1NqbdNH6Z2NhExia6lqwFfC8OT',
      user: {
        username: email,
        password: login,
      },
    },
    scopes,
    // tokenCache: myTokenCache,
    fetch,
  };

  const ctpClient = defaultClient
    .withClientCredentialsFlow(authMiddlewareOptions)
    .withPasswordFlow(passwordAuthMiddlewareOptions)
    .build();

  // let ctpClient: Client;
  // if (localStorage.getItem('TokenСache')) {
  //   const token = localStorage.getItem('TokenСache');
  //   const options: ExistingTokenMiddlewareOptions = {
  //     force: true,
  //   };
  //   ctpClient = defaultClient.withExistingTokenFlow(`Bearer ${token}`, options).build();
  // } else {
  //   ctpClient = defaultClient
  //     .withClientCredentialsFlow(authMiddlewareOptions)
  //     .withPasswordFlow(passwordAuthMiddlewareOptions)
  //     .build();
  // }

  const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
    projectKey: 'ecommece-application',
  });

  return apiRoot;
};

// const setToken = () => {
//   myTokenCache.get();
//   localStorage.setItem('TokenСache', myTokenCache.get().token);
// };

export const ctpClient = defaultClient.withAnonymousSessionFlow(authMiddlewareOptions).build();

export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'ecommece-application',
});

export const loginClient = async (email: string, password: string) => {
  const response = await getPasswordFlowClient(email, password)
    .me()
    .login()
    .post({
      body: {
        email: email,
        password: password,
      },
    })
    .execute();
  // setToken();
  localStorage.setItem('userInfo', JSON.stringify(response.body));
};

const client = new ClientBuilder()
  .withProjectKey(projectKey)
  .withClientCredentialsFlow(authMiddlewareOptions)
  .withHttpMiddleware(httpMiddlewareOptions)
  .withLoggerMiddleware()
  .build();

export const getApiRoot = () => {
  return createApiBuilderFromCtpClient(client).withProjectKey({
    projectKey: 'ecommece-application',
  });
};

export const getProducts = async () => {
  try {
    const products = await apiRoot
      .productProjections()
      .get({
        queryArgs: {
          limit: 30,
        },
      })
      .execute();
    return products.body.results as ProductsType;
  } catch (e) {
    console.log(e);
  }
};

export const search = async (value: string) => {
  try {
    const products = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          'text.en-US': value,
          limit: 29,
          fuzzy: true,
        },
      })
      .execute();
    return products.body.results as ProductsType;
  } catch (error) {
    console.error('error searching:', error);
    throw error;
  }
};

export const filter = async (id: string) => {
  try {
    const products = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          filter: [`variants.attributes.${id}:"yes"`],
        },
      })
      .execute();
    return products.body.results as ProductsType;
  } catch (e) {
    console.log(e);
  }
};

export const requestToCommerce = async (data: requestCatalogParamsType) => {
  try {
    const products = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: data,
      })
      .execute();
    return products.body.results as ProductsType;
  } catch (e) {
    console.log(e);
  }
};

export const requestToCommerceForRender = async (data: requestCatalogParamsType) => {
  try {
    const products = await apiRoot
      .productProjections()
      .get({
        queryArgs: data,
      })
      .execute();
    return products.body.results as ProductsType;
  } catch (e) {
    console.log(e);
  }
};

export const getCategoryID = async (key: string) => {
  try {
    const categories = await apiRoot.categories().get().execute();
    return categories.body.results.find((el) => el.key === key)!.id;
  } catch (e) {
    console.log(e);
  }
};

export const getCategoryProduct = async (key: string) => {
  try {
    const id = await getCategoryID(key);
    const product = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          filter: `categories.id:"${id}"`,
        },
      })
      .execute();
    return product.body.results as ProductsType;
  } catch (e) {
    console.log(e);
  }
};

export const getProduct = async (key: string) => {
  try {
    const product = await apiRoot.productProjections().withKey({ key: key }).get().execute();
    return product.body;
  } catch (e) {
    console.log(e);
  }
};

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

export const getProducts = async () => {
  if (!localStorage.getItem('Catalog info')) {
    const products = await apiRoot
      .productProjections()
      .get({
        queryArgs: {
          limit: 30,
        },
      })
      .execute();
    localStorage.setItem('Catalog info', JSON.stringify(products.body));
    return JSON.parse(localStorage.getItem('Catalog info')!);
  } else return JSON.parse(localStorage.getItem('Catalog info')!);
};

export const getProduct = async () => {
  const products = await apiRoot.products().withKey({ key: 'PS-1-1-1' }).get().execute();
  console.log(products.body);
};

export const sortByLowerPrice = async () => {
  const products = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        sort: ['price asc'],
        limit: 29,
      },
    })
    .execute();

  console.log('price to HIGH');
  console.log(products.body.results);
  return products.body.results;
};

export const sortByHigherPrice = async () => {
  const products = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        sort: ['price desc'],
        limit: 29,
      },
    })
    .execute();
  console.log('price to LOW');
  console.log(products.body.results);
  return products.body.results;
};

export const sortByAlphabetZA = async () => {
  const products = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        sort: ['name.en-US desc'],
        limit: 29,
      },
    })
    .execute();
  console.log(products.body.results);
  return products.body.results;
};

export const sortByAlphabetAZ = async () => {
  const products = await apiRoot
    .productProjections()
    .search()
    .get({
      queryArgs: {
        sort: ['name.en-US asc'],
        limit: 29,
      },
    })
    .execute();
  console.log(products.body.results);
  return products.body.results;
};

// export const seach = async (value: string) => {
//   const products = await apiRoot
//     .productProjections()
//     .get({
//       queryArgs: {
//         where: `name(en-US="${value}")`,
//       },
//     })
//     .execute();
//   return products.body;
// };

// * search
export const search = async (value: string) => {
  try {
    const products = await apiRoot
      .productProjections()
      .search()
      .get({
        queryArgs: {
          // fuzzy: true,
          where: `name(en-US="${value}")`,
          limit: 59,
        },
      })
      .execute();
    console.log(products.body.results);
    const productsNames = products.body.results
      .map((result) => result.name['en-US'])
      .filter((name) => name.toLowerCase().includes(value));
    console.log(productsNames);
    return productsNames;
  } catch (error) {
    console.error('error searching:', error);
    throw error;
  }
};

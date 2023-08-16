import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import { ctpClient } from './BuildClient';

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'ecommece-application',
});

try {
  apiRoot
    .customers()
    .post({
      body: {
        email: 'razumenro99@mail.ru',
        password: '123456L@3j',
        firstName: 'Elizaveta',
        lastName: 'Razumenko',
        dateOfBirth: '1999-05-30',
      },
    })
    .execute()
    .then((data) => console.log(data));
} catch (e) {
  console.log(e);
}

// // Example call to return Project information
// // This code has the same effect as sending a GET request to the commercetools Composable Commerce API without any endpoints.
// const getProject = () => {
//   return apiRoot.get().execute();
// };

// // Retrieve Project information and output the result to the log
// getProject().then(console.log).catch(console.error);

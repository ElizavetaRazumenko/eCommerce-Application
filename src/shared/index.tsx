import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import { ctpClient } from './BuildClient';

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'ecommece-application',
});

// const getProject = () => {
//   return apiRoot.get().execute();
// };

// getProject().then(console.log).catch(console.error);

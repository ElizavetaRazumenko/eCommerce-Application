import { createApiBuilderFromCtpClient } from '@commercetools/platform-sdk';

import { client, ctpClient } from './BuildClient';

// Create apiRoot from the imported ClientBuilder and include your Project key
export const apiRoot = createApiBuilderFromCtpClient(ctpClient).withProjectKey({
  projectKey: 'ecommece-application',
});

export const apiRoot2 = createApiBuilderFromCtpClient(client).withProjectKey({
  projectKey: 'ecommece-application',
});

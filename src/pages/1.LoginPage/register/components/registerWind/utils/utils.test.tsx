import { getRequestData } from './utils';

describe('getRequestData function', () => {
  it('should return correct data when both isDefaultBilling and isDefaultShipping are "no"', () => {
    const isDefaultBilling = 'no';
    const isDefaultShipping = 'no';

    const requestData = getRequestData(isDefaultBilling, isDefaultShipping);

    expect(requestData.body).not.toHaveProperty('defaultBillingAddress');
    expect(requestData.body).not.toHaveProperty('defaultShippingAddress');
    expect(requestData.email).toBeDefined();
    expect(requestData.password).toBeDefined();
  });

  it('should return the expected request data when defaultBilling is "yes" and defaultShipping is "yes"', () => {
    const isDefaultBilling = 'yes';
    const isDefaultShipping = 'yes';

    const requestData = getRequestData(isDefaultBilling, isDefaultShipping);

    expect(requestData.body).toHaveProperty('defaultBillingAddress', 0);
    expect(requestData.body).toHaveProperty('defaultShippingAddress', 1);
    expect(requestData.email).toBeDefined();
    expect(requestData.password).toBeDefined();
  });

  it('should return the expected request data when defaultBilling is "yes" and defaultShipping is "no"', () => {
    const isDefaultBilling = 'yes';
    const isDefaultShipping = 'no';

    const requestData = getRequestData(isDefaultBilling, isDefaultShipping);

    expect(requestData.body).toHaveProperty('defaultBillingAddress', 0);
    expect(requestData.body).not.toHaveProperty('defaultShippingAddress');
    expect(requestData.email).toBeDefined();
    expect(requestData.password).toBeDefined();
  });

  it('should return the expected request data when defaultBilling is "no" and defaultShipping is "yes"', () => {
    const isDefaultBilling = 'no';
    const isDefaultShipping = 'yes';

    const requestData = getRequestData(isDefaultBilling, isDefaultShipping);

    expect(requestData.body).not.toHaveProperty('defaultBillingAddress');
    expect(requestData.body).toHaveProperty('defaultShippingAddress', 1);
    expect(requestData.email).toBeDefined();
    expect(requestData.password).toBeDefined();
  });
});

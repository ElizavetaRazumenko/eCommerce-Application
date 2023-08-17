import state from '../../../../../../state/state';
import { RequestBodyType } from '../../../../../../types/types';
export const getKey = () => {
  const keyString = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 8; i += 1) {
    result += keyString[Math.floor(Math.random() * keyString.length)];
  }
  return result;
};

export const requestBody = (isDefaultBilling: boolean, isDefaultShipping: boolean) => {
  const keyBilling = getKey();
  const keyShipping = getKey();
  const dateOfBirth = state.registerPage.fieldData.find(
    (el) => el.plshldr === 'Date of birth: yyyy-mm-dd',
  )!.value;

  const countryBilling = () => {
    const field = state.registerPage.location.billing.find((el) => el.type === 'country')!;
    return field.value === 'Italy' ? 'IT' : 'ES';
  };

  const countryShipping = () => {
    const field = state.registerPage.location.shipping.find((el) => el.type === 'country')!;
    return field.value === 'Italy' ? 'IT' : 'ES';
  };
  const body: RequestBodyType = {
    email: state.registerPage.fieldData.find((el) => el.plshldr === 'Email')!.value,
    password: state.registerPage.fieldData.find((el) => el.plshldr === 'Password')!.value,
    firstName: state.registerPage.fieldData.find((el) => el.plshldr === 'First name')!.value,
    lastName: state.registerPage.fieldData.find((el) => el.plshldr === 'Last name')!.value,
    dateOfBirth: dateOfBirth,
    addresses: [
      {
        key: keyBilling,
        country: countryBilling(),
        city: state.registerPage.location.billing.find((el) => el.type === 'city')!.value,
        streetName: state.registerPage.location.billing.find((el) => el.type === 'street')!.value,
        postalCode: state.registerPage.location.billing.find((el) => el.type === 'postal')!.value,
      },
      {
        key: keyShipping,
        country: countryShipping(),
        city: state.registerPage.location.shipping.find((el) => el.type === 'city')!.value,
        streetName: state.registerPage.location.shipping.find((el) => el.type === 'street')!.value,
        postalCode: state.registerPage.location.shipping.find((el) => el.type === 'postal')!.value,
      },
    ],
    billingAddresses: [0],
    shippingAddresses: [1],
  };
  if (!isDefaultBilling && !isDefaultShipping) {
    return body;
  } else if (isDefaultBilling && isDefaultShipping) {
    body.defaultBillingAddress = 0;
    body.defaultShippingAddress = 1;
    return body;
  } else if (isDefaultShipping) {
    body.defaultShippingAddress = 1;
    return body;
  } else {
    body.defaultBillingAddress = 0;
    return body;
  }
};

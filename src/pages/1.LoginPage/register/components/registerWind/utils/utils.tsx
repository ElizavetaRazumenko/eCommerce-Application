import state from '../../../../../../state/state';
import { RequestBodyType } from '../../../../../../types/types';

const getKey = () => {
  const keyString = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 8; i += 1) {
    result += keyString[Math.floor(Math.random() * keyString.length)];
  }
  return result;
};

export const getRequestData = (isDefaultBilling: string, isDefaultShipping: string) => {
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
  const userEmail = state.registerPage.fieldData.find((el) => el.plshldr === 'Email')!.value;
  const userPassword = state.registerPage.fieldData.find((el) => el.plshldr === 'Password')!.value;
  console.log(`email: ${userEmail}, password: ${userPassword}`);

  const body: RequestBodyType = {
    email: userEmail,
    password: userPassword,
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
  if (isDefaultBilling === 'no' && isDefaultShipping === 'no') {
    return {
      body: body,
      email: userPassword,
      password: userPassword,
    };
  } else if (isDefaultBilling === 'yes' && isDefaultShipping === 'yes') {
    body.defaultBillingAddress = 0;
    body.defaultShippingAddress = 1;
    return {
      body: body,
      email: userPassword,
      password: userPassword,
    };
  } else if (isDefaultShipping === 'yes') {
    body.defaultShippingAddress = 1;
    return {
      body: body,
      email: userPassword,
      password: userPassword,
    };
  } else {
    body.defaultBillingAddress = 0;
    return {
      body: body,
      email: userPassword,
      password: userPassword,
    };
  }
};

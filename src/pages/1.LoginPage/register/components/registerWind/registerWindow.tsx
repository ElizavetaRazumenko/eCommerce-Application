import { ErrorObject } from '@commercetools/platform-sdk';
import { useRef, useState } from 'react';

import s from './registerWindow.module.scss';

import { apiRoot } from '../../../../../shared/index';
import state from '../../../../../state/state';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const getKey = () => {
  const keyString = '0123456789abcdef';
  let result = '';
  for (let i = 0; i < 6; i += 1) {
    result += keyString[Math.floor(Math.random() * keyString.length)];
  }
  return result;
};

const RegisterWindow = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');

  const deleteError = () => setErrorMessage('');

  const checkSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isValidForm = state.registerPage.fieldData.find((field) => !field.isValid);
    const isValidBilling = state.registerPage.location.billing.find((field) => !field.isValid);
    const isValidShipping = state.registerPage.location.shipping.find((field) => !field.isValid);
    if (isValidForm) {
      isValidForm.value === ''
        ? setErrorMessage(`field '${isValidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${isValidForm.plshldr}' is not valid`);
    } else if (isValidBilling) {
      isValidBilling.value === ''
        ? setErrorMessage(`in Billing address field '${isValidBilling.type}' is empty`)
        : setErrorMessage(`in Billing address field '${isValidBilling.type}' is not valid`);
    } else if (isValidShipping) {
      isValidShipping.value === ''
        ? setErrorMessage(`in Shippnig address field '${isValidShipping.type}' is empty`)
        : setErrorMessage(`in Shipping address field '${isValidShipping.type}' is not valid`);
    } else {
      const keyBilling = getKey();
      const keyShipping = getKey();
      try {
        await apiRoot
          .customers()
          .post({
            body: {
              email: 'uotytiiy99@mail.ru',
              password: '123456L@3j',
              firstName: 'Ea',
              lastName: 'Razo',
              dateOfBirth: '1999-05-30',
              addresses: [
                {
                  key: keyBilling,
                  country: 'IT',
                  city: 'ooo',
                  streetName: 'jh',
                  postalCode: '000000',
                },
                {
                  key: keyShipping,
                  country: 'IT',
                  city: 'ooo',
                  streetName: 'jh',
                  postalCode: '000000',
                },
              ],
              billingAddresses: [0],
              shippingAddresses: [0],
              defaultBillingAddress: 0,
              defaultShippingAddress: 0,
            },
          })
          .execute();
      } catch (e) {
        if (e instanceof Error) {
          if (e.message !== '') {
            setErrorMessage(e.message);
          }
        }
      }
    }
  };
  return (
    <div className={s.register_window}>
      <Toggler />
      <div className={s.field_wrapper} ref={formRef}>
        {state.registerPage.fieldData.map((data) => {
          return (
            <div key={data.id} onChange={deleteError}>
              <Field
                id={data.id}
                name={data.plshldr}
                plshldr={data.plshldr}
                classname={data.classname}
                errorMessage={data.errorMessage}
                page={data.page}
                type={data.type}
                value={data.value}
                isValid={data.isValid}
              />
            </div>
          );
        })}
        <Location />
        <p className={s.control}>{errorMessage}</p>
        <button className={s.button} onClick={checkSubmit}>
          <span>Register</span>
        </button>
      </div>
    </div>
  );
};

export default RegisterWindow;

import { useRef, useState } from 'react';

import s from './registerWindow.module.scss';

import { apiRoot } from '../../../../../shared/index';
import state from '../../../../../state/state';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const [errorMessage, setErrorMessage] = useState<string>('');
  const checkSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const isValidForm = state.registerPage.fieldData.find((field) => !field.isValid);
    const isValidBilling = state.registerPage.location.billing.find((field) => !field.isValid);
    const isValidShipping = state.registerPage.location.shipping.find((field) => !field.isValid);
    console.log(isValidForm);
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
    }
  };
  return (
    <div className={s.register_window}>
      <Toggler />
      <div className={s.field_wrapper} ref={formRef}>
        {state.registerPage.fieldData.map((data) => {
          return (
            <div key={data.id}>
              <Field
                id={data.id}
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

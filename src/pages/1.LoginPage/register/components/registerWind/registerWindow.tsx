import { useRef, useState } from 'react';

import s from './registerWindow.module.scss';

import { getRequestData } from './utils/utils';

import { apiRoot, loginClient } from '../../../../../shared/index';
import state from '../../../../../state/state';
import { RegisterPagePropsType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = (props: RegisterPagePropsType) => {
  const formRef = useRef<HTMLDivElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [useAsDefaultBilling, setAsDefaultBilling] = useState<string>(
    localStorage.getItem('defaultB') === 'yes' ? 'yes' : 'no',
  );
  const [useAsDefaultShipping, setAsDefaultShipping] = useState<string>(
    localStorage.getItem('defaultS') === 'yes' ? 'yes' : 'no',
  );

  const requestSettings = {
    defaultBilling: useAsDefaultBilling,
    setdDefaultBilling: setAsDefaultBilling,
    defaultShipping: useAsDefaultShipping,
    setdDefaultShipping: setAsDefaultShipping,
  };

  const deleteError = () => setErrorMessage('');

  const registerTrek = () => {
    props.setUserState('Logout');
    localStorage.setItem('userState', 'Logout');
  };

  const checkSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const invalidForm = state.registerPage.fieldData.find((field) => !field.isValid);
    const invalidBilling = state.registerPage.location.billing.find((field) => !field.isValid);
    const invalidShipping = state.registerPage.location.shipping.find((field) => !field.isValid);
    if (invalidForm) {
      invalidForm.value === ''
        ? setErrorMessage(`field '${invalidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${invalidForm.plshldr}' is not valid`);
    } else if (invalidBilling) {
      invalidBilling.value === ''
        ? setErrorMessage(`in Billing address field '${invalidBilling.type}' is empty`)
        : setErrorMessage(`in Billing address field '${invalidBilling.type}' is not valid`);
    } else if (invalidShipping) {
      invalidShipping.value === ''
        ? setErrorMessage(`in Shippnig address field '${invalidShipping.type}' is empty`)
        : setErrorMessage(`in Shipping address field '${invalidShipping.type}' is not valid`);
    } else {
      const requestData = getRequestData(
        requestSettings.defaultBilling,
        requestSettings.defaultShipping,
      );
      try {
        await apiRoot
          .customers()
          .post({
            body: requestData.body,
          })
          .execute()
          .then(() => loginClient(requestData.email, requestData.password));
        localStorage.setItem('CurrentEmail', requestData.email);
        setSuccessMessage('Registered ✔');
        setTimeout(registerTrek, 700);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'There is already an existing customer with the provided email.') {
            setErrorMessage('User with this email already exists');
          } else {
            console.log(e.message);
            setErrorMessage('Something went wrong. Please try again later');
          }
        }
      }
    }
  };
  return (
    <div className={s.wrapper}>
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
          <Location defaultSetting={requestSettings} />
          <p className={s.control}>{errorMessage}</p>
          <button className={s.button} onClick={checkSubmit}>
            <span>Register</span>
          </button>
        </div>
      </div>
      <p className={s.notification}>{successMessage}</p>
    </div>
  );
};

export default RegisterWindow;

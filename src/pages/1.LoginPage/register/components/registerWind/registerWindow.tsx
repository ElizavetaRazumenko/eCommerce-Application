import { useRef, useState } from 'react';

import s from './registerWindow.module.scss';

import state from '../../../../../state/state';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const deleteError = () => {
    setErrorMessage('');
  };

  const [errorMessage, setErrorMessage] = useState<string>('');
  const checkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = state.registerPage.fieldData.some((field) => !field.isValid);
    if (isValidForm) {
      setErrorMessage('some fields are empty or not valid');
    }
  };
  return (
    <div className={s.register_window}>
      <Toggler />
      <form className={s.field_wrapper} ref={formRef} onSubmit={checkSubmit} onChange={deleteError}>
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
        <button className={s.button}>
          <span>Register</span>
        </button>
      </form>
    </div>
  );
};

export default RegisterWindow;

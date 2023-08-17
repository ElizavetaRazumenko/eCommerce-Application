import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import state from '../../../../../state/state';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const deleteError = () => {
    setErrorMessage('');
  };

  const checkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = state.loginPage.fieldData.find((field) => !field.isValid);
    if (isValidForm) {
      isValidForm.value === ''
        ? setErrorMessage(`field '${isValidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${isValidForm.plshldr}' is not valid`);
    }
  };
  return (
    <div className={s.login_window}>
      <Toggler />
      <form className={s.field_wrapper} ref={formRef} onSubmit={checkSubmit} onChange={deleteError}>
        {state.loginPage.fieldData.map((data) => {
          return (
            <div key={data.id}>
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
        <p className={s.control}>{errorMessage}</p>
        <button className={s.button}>
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default LoginWindow;

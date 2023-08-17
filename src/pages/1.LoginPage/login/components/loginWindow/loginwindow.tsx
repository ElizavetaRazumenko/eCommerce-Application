import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import { apiRoot2 } from '../../../../../shared';
import state from '../../../../../state/state';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const deleteError = () => {
    setErrorMessage('');
  };

  const checkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = state.loginPage.fieldData.find((field) => !field.isValid);
    if (isValidForm) {
      isValidForm.value === ''
        ? setErrorMessage(`field '${isValidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${isValidForm.plshldr}' is not valid`);
    } else {
      try {
        await apiRoot2
          .me()
          .login()
          .post({
            body: {
              email: 'razumenko99@mail.ru',
              password: '123456L@3j',
            },
          })
          .execute();
      } catch (e) {
        if (e instanceof Error) {
          console.log(e.message);
        }
      }
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

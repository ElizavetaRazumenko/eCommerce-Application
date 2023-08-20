import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import { loginClient } from '../../../../../shared/index';
import state from '../../../../../state/state';
import { LoginPagePropsType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: LoginPagePropsType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const deleteError = () => {
    setErrorMessage('');
  };

  const loginTrek = () => {
    props.setUserState('Logout');
    localStorage.setItem('userState', 'Logout');
  };

  const checkSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = state.loginPage.fieldData.find((field) => !field.isValid);
    if (isValidForm) {
      isValidForm.value === ''
        ? setErrorMessage(`field '${isValidForm.plshldr}' is empty`)
        : setErrorMessage(`field '${isValidForm.plshldr}' is not valid`);
    } else {
      const email = state.loginPage.fieldData.find((el) => el.classname === 'email')!.value;
      const password = state.loginPage.fieldData.find((el) => el.classname === 'password')!.value;
      try {
        await loginClient(email, password);
        setSuccessMessage('Authorized ✔');
        setTimeout(loginTrek, 700);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'Customer account with the given credentials not found.') {
            setErrorMessage("Invalid email or password. Don't have an account? Click registration");
          } else setErrorMessage(e.message);
        }
      }
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.login_window}>
        <Toggler />
        <form
          className={s.field_wrapper}
          ref={formRef}
          onSubmit={checkSubmit}
          onChange={deleteError}
        >
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
      <p className={s.notification}>{successMessage}</p>
    </div>
  );
};

export default LoginWindow;

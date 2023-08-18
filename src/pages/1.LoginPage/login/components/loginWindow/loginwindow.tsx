import { useRef, useState } from 'react';

import { useNavigate } from 'react-router';

import s from './loginWindow.module.scss';

import { getPasswordFlowClient } from '../../../../../shared';
import state from '../../../../../state/state';
import { LoginPagePropsType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: LoginPagePropsType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');
  const navigate = useNavigate();

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
      const Email = state.loginPage.fieldData.find((el) => el.classname === 'email')!.value;
      const Password = state.loginPage.fieldData.find((el) => el.classname === 'password')!.value;
      try {
        await getPasswordFlowClient(Email, Password)
          .me()
          .login()
          .post({
            body: {
              email: Email,
              password: Password,
            },
          })
          .execute();
        props.setUserState('Logout');
        localStorage.setItem('userState', 'Logout');
        setSuccessMessage('Successfully');
        setTimeout(() => navigate('/'), 700);
      } catch (e) {
        if (e instanceof Error) {
          if (e.message === 'Missing required user credentials (username, password)') {
            setErrorMessage('Invalid email or password');
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

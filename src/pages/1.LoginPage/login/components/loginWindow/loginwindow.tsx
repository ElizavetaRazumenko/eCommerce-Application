import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import { loginPageType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: loginPageType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const checkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = props.state.loginPage.fieldData.some((field) => !field.isValid);
    if (isValidForm) {
      setErrorMessage('some fields are empty or not valid');
    }
  };
  const deleteError = () => {
    setErrorMessage('');
  };
  return (
    <div className={s.login_window}>
      <Toggler />
      <form className={s.field_wrapper} ref={formRef} onSubmit={checkSubmit} onChange={deleteError}>
        {props.state.loginPage.fieldData.map((data) => {
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
                state={props.state}
                setState={props.setState}
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

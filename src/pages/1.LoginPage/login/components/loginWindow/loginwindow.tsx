import { useEffect } from 'react';
import { ChangeEvent, useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import state from '../../../../../state/state';
import { getUserCredentials } from '../../../../../store/common/actions';
import { setCredentials } from '../../../../../store/common/reducer';
import { getCommonStateSelector } from '../../../../../store/common/selectors';
import { useAppDispatch, useAppSelector } from '../../../../../store/hooks';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const { login, password, isFetching } = useAppSelector(getCommonStateSelector);
  const dispatch = useAppDispatch();

  const onChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    dispatch(setCredentials({ [target.name]: target.value }));
  };

  useEffect(() => {
    console.log('123123');
    dispatch(getUserCredentials());
  }, []);

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
        <input name='login' value={login} onChange={onChange} />
        <input name='password' value={password} onChange={onChange} />
        {isFetching && <h2 style={{ color: 'red' }}>...loading</h2>}
        <button className={s.button}>
          <span>Login</span>
        </button>
      </form>
    </div>
  );
};

export default LoginWindow;

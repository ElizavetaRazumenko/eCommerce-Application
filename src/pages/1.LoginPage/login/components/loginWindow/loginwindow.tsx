import { useRef, useState } from 'react';

import s from './loginWindow.module.scss';

import initialState from '../../../../../state/state';
import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  const [formValues, setFormValues] = useState<{
    login: { [key: string]: boolean };
    password: { [key: string]: boolean };
  }>({
    login: { error: false },
    password: { error: false },
  });

  const formRef = useRef<HTMLFormElement>(null);
  const onSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    const [login, password] = Array.from(formRef.current?.elements || []) as HTMLInputElement[];
    console.log(login.value, password.value);
  };

  const validateInput: React.FormEventHandler = (e) => {
    const target = e.target as HTMLInputElement;
    if (!target.value) {
      setFormValues({ ...formValues, login: { error: true }, password: { error: true } });
    } else {
      setFormValues({ ...formValues, login: { error: false }, password: { error: false } });
    }
  };

  return (
    <div className={s.login_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <form ref={formRef} onChange={validateInput}>
          {initialState.loginPage.fieldData.map((data) => {
            return (
              <div key={data.id}>
                <Field
                  id={data.id}
                  plshldr={data.plshldr}
                  classname={data.classname}
                  page={data.page}
                  type={data.type}
                  errorMessage={data.errorMessage}
                  value={data.value}
                  isValid={data.isValid}
                  addInputValue={() => null}
                />
                <p className={s.control}>{data.errorMessage}</p>
              </div>
            );
          })}
          <Button content='Login' />
          <button onClick={onSubmit}>submit</button>
          {formValues.login.error && <div>validation errors</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginWindow;

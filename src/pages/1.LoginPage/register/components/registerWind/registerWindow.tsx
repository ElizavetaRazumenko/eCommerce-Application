import { useRef, useState } from 'react';

import s from './registerWindow.module.scss';

import { registerPageType } from '../../../../../types/types';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = (props: registerPageType) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const checkSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidForm = props.state.registerPage.fieldData.some((field) => !field.isValid);
    if (isValidForm) {
      setErrorMessage('some fields are empty or not valid');
    }
  };
  const deleteError = () => {
    setErrorMessage('');
  };
  return (
    <div className={s.register_window}>
      <Toggler />
      <form className={s.field_wrapper} ref={formRef} onSubmit={checkSubmit} onChange={deleteError}>
        {props.state.registerPage.fieldData.map((data) => {
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

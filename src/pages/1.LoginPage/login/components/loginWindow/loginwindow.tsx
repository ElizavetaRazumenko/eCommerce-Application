import s from './loginWindow.module.scss';

import { loginPageType } from '../../../../../types/types';
import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = (props: loginPageType) => {
  return (
    <div className={s.login_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <Field
          plshldr='Username'
          classname='user'
          page='field_login'
          type='text'
          addInputValue={props.addInputValue}
        />
        <Field
          plshldr='Password'
          classname='password'
          page='field_login'
          type='password'
          addInputValue={props.addInputValue}
        />
      </div>
      <Button content='Login' />
    </div>
  );
};

export default LoginWindow;

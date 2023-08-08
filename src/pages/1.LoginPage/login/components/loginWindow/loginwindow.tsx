import s from './loginWindow.module.css';

import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  return (
    <div className={s.login_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <Field plshldr='Username' classname='user' type='field_login' />
        <Field plshldr='Passwors' classname='password' type='field_login' />
      </div>
      <Button content='Login' />
    </div>
  );
};

export default LoginWindow;

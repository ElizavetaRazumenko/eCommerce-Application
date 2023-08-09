import s from './loginWindow.module.scss';

import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';

const LoginWindow = () => {
  return (
    <div className={s.login_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <Field plshldr='Username' classname='user' page='field_login' type='text' />
        <Field plshldr='Password' classname='password' page='field_login' type='password' />
      </div>
      <Button content='Login' />
    </div>
  );
};

export default LoginWindow;

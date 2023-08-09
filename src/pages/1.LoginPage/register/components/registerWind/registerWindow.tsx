import s from './registerWindow.module.scss';

import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = () => {
  return (
    <div className={s.register_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <Field plshldr='Username' classname='user' page='field_register' type='text' />
        <Field plshldr='First name' classname='user' page='field_register' type='text' />
        <Field
          plshldr='Date of birth: dd.mm.yy'
          classname='user'
          page='field_register'
          type='text'
        />
        <Location />
        <Field plshldr='Email' classname='email' page='field_register' type='email' />
        <Field plshldr='Password' classname='password' page='field_register' type='password' />
        <Field
          plshldr='Repeat the password'
          classname='password'
          page='field_register'
          type='password'
        />
      </div>
      <Button content='Register' />
    </div>
  );
};

export default RegisterWindow;

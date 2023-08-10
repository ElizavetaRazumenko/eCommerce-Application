import s from './registerWindow.module.scss';

import { registerPageType } from '../../../../../types/types';
import Button from '../../../components/button/button';
import Field from '../../../components/field/field';
import Toggler from '../../../components/toggler/toggler';
import Location from '../location/location';

const RegisterWindow = (props: registerPageType) => {
  return (
    <div className={s.register_window}>
      <Toggler />
      <div className={s.field_wrapper}>
        <Field
          plshldr='Username'
          classname='user'
          page='field_register'
          type='text'
          addInputValue={props.addInputValue}
        />
        <Field
          plshldr='First name'
          classname='user'
          page='field_register'
          type='text'
          addInputValue={props.addInputValue}
        />
        <Field
          plshldr='Date of birth: dd.mm.yy'
          classname='user_no_magrin'
          page='field_register'
          type='text'
          addInputValue={props.addInputValue}
        />
        <p className={s.invalide + ' ' + s.control}>enter the date in the required format</p>
        <Location />
        <Field
          plshldr='Email'
          classname='email'
          page='field_register'
          type='email'
          addInputValue={props.addInputValue}
        />
        <p className={s.invalide + ' ' + s.control}>invalid email address</p>
        <Field
          plshldr='Password'
          classname='password_no_magrin'
          page='field_register'
          type='password'
          addInputValue={props.addInputValue}
        />
        <p className={s.invalide + ' ' + s.control}>password must contain special characters</p>
      </div>
      <Button content='Register' />
    </div>
  );
};

export default RegisterWindow;

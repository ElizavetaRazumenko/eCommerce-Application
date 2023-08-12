import RegisterWindow from './components/registerWind/registerWindow';
import s from './register.module.scss';

import { registerPageType } from '../../../types/types';
const RegisterPage = (props: registerPageType) => {
  return (
    <div className={s.register_wrapper}>
      <RegisterWindow
        stateRegisterPage={props.stateRegisterPage}
        addInputValue={props.addInputValue}
      />
    </div>
  );
};

export default RegisterPage;

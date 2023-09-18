import RegisterWindow from './components/registerWind/registerWindow';
import s from './register.module.scss';

import { RegisterPagePropsType } from '../../../types/types';

const RegisterPage = (props: RegisterPagePropsType) => {
  return (
    <div className={s.register_wrapper}>
      <RegisterWindow setUserState={props.setUserState} />
    </div>
  );
};

export default RegisterPage;

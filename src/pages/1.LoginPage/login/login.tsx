import LoginWindow from './components/loginWindow/loginwindow';
import s from './login.module.scss';

import { LoginPagePropsType } from '../../../types/types';

const LoginPage = (props: LoginPagePropsType) => {
  return (
    <div className={s.login_wrapper}>
      <LoginWindow setUserState={props.setUserState} />
    </div>
  );
};

export default LoginPage;

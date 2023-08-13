import LoginWindow from './components/loginWindow/loginwindow';
import s from './login.module.scss';

import { loginPageType } from '../../../types/types';
const LoginPage = (props: loginPageType) => {
  return (
    <div className={s.login_wrapper}>
      <LoginWindow state={props.state} setState={props.setState} />
    </div>
  );
};

export default LoginPage;

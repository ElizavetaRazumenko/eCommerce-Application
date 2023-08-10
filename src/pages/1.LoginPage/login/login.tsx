import LoginWindow from './components/loginWindow/loginwindow';
import s from './login.module.scss';

import { loginPageType } from '../../../types/types';
const LoginPage = (props: loginPageType) => {
  return (
    <div className={s.login_wrapper}>
      <LoginWindow addInputValue={props.addInputValue} />
    </div>
  );
};

export default LoginPage;

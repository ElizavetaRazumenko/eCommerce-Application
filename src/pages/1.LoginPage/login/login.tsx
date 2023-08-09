import LoginWindow from './components/loginWindow/loginwindow';
import s from './login.module.scss';

const LoginPage = () => {
  return (
    <div className={s.login_wrapper}>
      <LoginWindow />
    </div>
  );
};

export default LoginPage;

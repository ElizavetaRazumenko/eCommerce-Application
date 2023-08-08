import s from './loginWindow.module.css';

import Toggler from '../../../login/login';

const LoginWindow = () => {
  return (
    <div className={s.login_window}>
      <Toggler />
    </div>
  );
};

export default LoginWindow;

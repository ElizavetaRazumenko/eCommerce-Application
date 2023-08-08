import { NavLink } from 'react-router-dom';

import s from './toggler.module.css';

const Toggler = () => {
  return (
    <div className={s.toggler}>
      <NavLink className={s.login_a + ' ' + s.unactive_link} to='/login'>
        Login
      </NavLink>
      <NavLink className={s.register_a + ' ' + s.active_link} to='/register'>
        Register
      </NavLink>
    </div>
  );
};

export default Toggler;

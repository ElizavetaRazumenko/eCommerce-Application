import { NavLink } from 'react-router-dom';

import s from './toggler.module.scss';

const Toggler = () => {
  return (
    <div className={s.toggler}>
      <NavLink
        className={({ isActive }) => (isActive ? s.link + ' ' + s.active_link : s.link)}
        to='/login'
      >
        Login
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? s.link + ' ' + s.active_link : s.link)}
        to='/register'
      >
        Register
      </NavLink>
    </div>
  );
};

export default Toggler;

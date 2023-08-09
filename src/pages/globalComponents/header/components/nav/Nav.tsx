import { NavLink } from 'react-router-dom';

import s from './nav.module.css';

const Nav = () => {
  return (
    <nav>
      <ul className={s.navigation_list}>
        <li className={s.nav_item}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
          >
            Main
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to='/catalog'
            className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
          >
            Catalog
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to='/profile'
            className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
          >
            Profile
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to='/cart'
            className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
          >
            Cart
          </NavLink>
        </li>
        <li className={s.nav_item}>
          <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;

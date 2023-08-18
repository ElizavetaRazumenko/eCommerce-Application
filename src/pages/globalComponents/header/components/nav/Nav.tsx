import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './nav.module.scss';

import { HeaderPropsType } from '../../../../../types/types';

const Nav = (props: HeaderPropsType) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleBurgerMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };
  return (
    <>
      <nav>
        <ul className={`${s.navigation_list} ${isOpen ? s.burger_menu_open : ''}`}>
          <li className={s.nav_item}>
            <NavLink
              to='/'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              Main
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to='/catalog'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              Catalog
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to='/details'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              Details
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to='/profile'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              Profile
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to='/cart'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              Cart
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to={'/login'}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              {props.userState}
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className={`${s.burger_btn}`} onClick={toggleBurgerMenu}>
        <span className={`${s.burger_line} ${s.burger_line_1} ${isOpen ? s.open_line : ''}`}></span>
        <span className={`${s.burger_line} ${s.burger_line_2} ${isOpen ? s.open_line : ''}`}></span>
        <span className={`${s.burger_line} ${s.burger_line_3} ${isOpen ? s.open_line : ''}`}></span>
        <span className={`${s.burger_line} ${s.burger_line_4} ${isOpen ? s.open_line : ''}`}></span>
      </div>
    </>
  );
};

export default Nav;

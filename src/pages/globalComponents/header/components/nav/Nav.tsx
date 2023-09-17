import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './nav.module.scss';

import { HeaderPropsType } from '../../../../../types/types';

const Nav = (props: HeaderPropsType) => {
  const [cartProductCount, setCartProductCount] = useState<number>(''.length);
  const onStorage = () => {
    if (localStorage.getItem('CartItems')) {
      setCartProductCount(JSON.parse(localStorage.getItem('CartItems')!).length);
    } else {
      setCartProductCount(0);
    }
  };
  useEffect(() => {
    onStorage();
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

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
              to='/about-us'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
            >
              About us
            </NavLink>
          </li>
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
          <li className={props.userState === 'Login' ? s.hidden : s.nav_item}>
            <NavLink
              to='/profile'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link
                  : props.userState === 'Login'
                  ? s.hidden
                  : s.link
              }
            >
              Profile
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to='/cart'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive ? s.link_cart + ' ' + s.no_active_link : s.link_cart
              }
            >
              Cart
              <div className={s.cart_wrapper}>
                <div className={s.cart_img}></div>
                <div className={cartProductCount === 0 ? s.hidden : s.product_amount_wrap}>
                  <span className={s.product_amount}>{cartProductCount}</span>
                </div>
              </div>
            </NavLink>
          </li>
          <li className={s.nav_item}>
            <NavLink
              to={'/login'}
              onClick={() => {
                setIsOpen(false);
                props.setUserState('Login');
                localStorage.setItem('userState', 'Login');
              }}
              className={({ isActive }) =>
                isActive || window.location.pathname === '/registration'
                  ? s.link + ' ' + s.no_active_link
                  : s.link
              }
            >
              {props.userState === 'Login' ? 'Login/Register' : 'Logout'}
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

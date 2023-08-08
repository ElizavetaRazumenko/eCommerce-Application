import { NavLink } from 'react-router-dom';

import s from './logo.module.css';

import logoUrl from '../../../../../assets/logo/parsley.png';
import logo2Url from '../../../../../assets/logo/souse.png';

const Logo = () => {
  return (
    <NavLink className={s.logo_wrapper} to='/'>
      <h1 className={s.logo_title}>
        <img src={logoUrl} className={s.app_logo} alt='logo' />
        PIZZA ITALIANO
        <img src={logo2Url} className={s.app_logo + ' ' + s.app_logo2} alt='logo' />
      </h1>
      <span className={s.subtitle}>
        the best for <span className={s.parsley}>you</span>
      </span>
    </NavLink>
  );
};

export default Logo;

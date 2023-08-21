import React from 'react';

import Logo from './components/logo/Logo';
import Nav from './components/nav/Nav';

import s from './header.module.scss';

import { HeaderPropsType } from '../../../types/types';

const Header = (props: HeaderPropsType) => {
  return (
    <header>
      <div className={s.header_container}>
        <Logo />
        <Nav userState={props.userState} setUserState={props.setUserState} />
      </div>
    </header>
  );
};

export default Header;

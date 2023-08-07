import React from 'react';

import Logo from './components/logo/Logo';
import Nav from './components/nav/Nav';

import s from './header.module.css';

const Header = () => {
  return (
    <header>
      <div className={s.header_container}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
};

export default Header;

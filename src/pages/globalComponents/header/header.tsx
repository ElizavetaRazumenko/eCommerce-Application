import React from 'react';

import Logo from './components/Logo';
import Nav from './components/Nav';

export function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <Logo />
          <Nav />
        </div>
      </div>
    </header>
  );
}

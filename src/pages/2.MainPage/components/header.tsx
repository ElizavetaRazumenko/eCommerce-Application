import React from 'react';

import logoUrl from '../../../assets/logo/parsley.png';

export function Logo() {
  return (
    <div className='logo-wrapper'>
      <div className='logo-title'>
        <h1>ITALIC PIZZA</h1>
        <img src={logoUrl} className='App-logo' alt='logo' />
      </div>
      <span className='subtitle'>
        the <span className='parsley'>best</span> for you
      </span>
    </div>
  );
}

export function Nav() {
  return (
    <nav className='nav'>
      <ul className='navigation-list'>
        <li className='nav-item no-active-link'>Main</li>
        <li className='nav-item'>Catalog</li>
        <li className='nav-item'>Profile</li>
        <li className='nav-item'>Cart</li>
        <li className='nav-item'>Login page</li>
      </ul>
    </nav>
  );
}

export function SectionWelcome() {
  return (
    <section className='section section-welcome'>
      <h2 className='title-welcome title-left'>Welcome to the Italian pizzeria!</h2>
      <p className='welcome-contemt'>
        We have been preparing the best pizza for you for many years. Our chefs use the finest
        ingredients and the freshest vegetables for cooking. But the most important ingredient is
        that we make pizza with love!
      </p>
    </section>
  );
}

export function Header() {
  return (
    <header>
      <div className='container'>
        <div className='header-container'>
          <Logo />
          <Nav />
        </div>
        <SectionWelcome />
      </div>
    </header>
  );
}

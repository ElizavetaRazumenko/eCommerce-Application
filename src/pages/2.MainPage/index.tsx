import React from 'react';

import { Main } from './components/main';

import { Footer } from '../globalComponents/footer/footer';
import { Header } from '../globalComponents/header/header';

export function Init() {
  return (
    <div>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

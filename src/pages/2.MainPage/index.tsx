import React from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';
import { Main } from './components/main';

export function Init() {
  return (
    <div>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

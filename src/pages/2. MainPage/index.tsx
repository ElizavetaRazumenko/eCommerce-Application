import React from 'react';

import { Footer } from '../2. MainPage/components/footer';
import { Header } from '../2. MainPage/components/header';
import { Main } from '../2. MainPage/components/main';

export function Init() {
  return (
    <div>
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}

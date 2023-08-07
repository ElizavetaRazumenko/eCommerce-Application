import React from 'react';

import { Footer } from '../globalComponents/footer/footer';
import { Header } from '../globalComponents/header/header';
import { Main } from '../globalComponents/main/main';

export function Init() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

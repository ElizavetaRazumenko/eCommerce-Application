import React from 'react';

import SectionPizzas from './components/pizzas/pizzas';
import SectionWelcome from './components/welcome/welcome';

const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionPizzas />
    </main>
  );
};

export default Main;

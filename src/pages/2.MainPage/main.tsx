import React from 'react';

import SectionDrinks from './components/drinks/drinks';
import SectionPizzas from './components/pizzas/pizzas';
import SectionSauces from './components/sauces/sauces';
import SectionWelcome from './components/welcome/welcome';

const Main = () => {
  return (
    <main>
      <SectionWelcome />
      <SectionPizzas />
      <SectionSauces />
      <SectionDrinks />
    </main>
  );
};

export default Main;

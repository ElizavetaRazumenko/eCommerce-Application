import React from 'react';

import SectionDrinks from './components/drinks/drinks';
import SectionPizzas from './components/pizzas/pizzas';
import SectionSauces from './components/sauces/sauces';
import SectionWelcome from './components/welcome/welcome';
import s from './main.module.css';

const Main = () => {
  return (
    <main className={s.main}>
      <SectionWelcome />
      <SectionPizzas />
      <SectionSauces />
      <SectionDrinks />
    </main>
  );
};

export default Main;

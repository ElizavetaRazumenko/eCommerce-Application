import React from 'react';

import SectionDrinks from './components/drinks/drinks';
import SectionPizzas from './components/pizzas/pizzas';
import SectionSauces from './components/sauces/sauces';
import SectionWelcome from './components/welcome/welcome';
import s from './main.module.scss';

import { stateTypeMain } from '../../types/types';

const Main = (props: stateTypeMain) => {
  return (
    <main className={s.main}>
      <SectionWelcome />
      <SectionPizzas />
      <SectionSauces />
      <SectionDrinks drinksType={props.stateMain.drinks} />
    </main>
  );
};

export default Main;

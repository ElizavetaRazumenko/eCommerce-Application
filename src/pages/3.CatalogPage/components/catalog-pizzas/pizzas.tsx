import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Pizza from './catalog-pizza/pizza';
import s from './pizzas.module.scss';

import state from '../../../../state/state';
import { stateTypeVisiblePizzas } from '../../../../types/types';

const CatalogPizzas = () => {
  // const [startIndex, setStartIndex] = useState(0);
  const visiblePizzas = [];

  for (let i = 0; i < state.mainPage.pizzas.length; i++) {
    const pizzaIndex = i % state.mainPage.pizzas.length;
    visiblePizzas.push(state.mainPage.pizzas[pizzaIndex]);
  }

  const pizzas = visiblePizzas.map((pizza, index) => (
    <Pizza key={index} link={pizza.link} name={pizza.name} cost={pizza.cost} />
  ));

  return (
    <>
      <div className={s.smoke_b}></div>
      <section className={s.section_offer}>
        <h3 className={s.title_section + ' ' + s.title_center}> Pizzas</h3>
        <div className={s.pizza_collection}>{pizzas} </div>
        {/* <NavLink to='/catalog' className={s.link}>
          <button className={s.btn_see_all}>See all</button>
        </NavLink> */}
      </section>
    </>
  );
};

export default CatalogPizzas;

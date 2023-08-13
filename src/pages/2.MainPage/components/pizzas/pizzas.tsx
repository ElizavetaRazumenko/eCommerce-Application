import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Pizza from './components/pizza/pizza';
import s from './pizzas.module.scss';

import state from '../../../../state/state';
import { stateTypeVisiblePizzas } from '../../../../types/types';

const SectionPizzas = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);
  const visiblePizzas: stateTypeVisiblePizzas = [];

  const clickRight = (): void => {
    setIsAnimating(true);
    setAnimateLeft(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= state.mainPage.pizzas.length) {
          return 0;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 1000);
  };

  const clickLeft = (): void => {
    setIsAnimating(true);
    setAnimateLeft(false);
    setTimeout(() => {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex - 1;
        if (newIndex < 0) {
          return state.mainPage.pizzas.length - 1;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 1000);
  };

  for (let i = startIndex - 1; i <= startIndex + itemsPerPage; i += 1) {
    const pizzaIndex = (i + state.mainPage.pizzas.length) % state.mainPage.pizzas.length;
    visiblePizzas.push(state.mainPage.pizzas[pizzaIndex]);
  }

  const pizzas = visiblePizzas.map((pizza, index) => (
    <Pizza key={index} link={pizza.link} name={pizza.name} cost={pizza.cost} />
  ));

  return (
    <>
      <div className={s.smoke_b}></div>
      <section className={s.section_offer}>
        <h3 className={s.title_section + ' ' + s.title_center}>
          We offer a collection of our best pizzas
        </h3>
        <div
          ref={sliderRef}
          className={`${s.pizza_collection} ${
            isAnimating ? (animateLeft ? s.transition_left : s.transition_right) : ''
          }`}
          onTransitionEnd={() => setIsAnimating(false)}
        >
          {pizzas}
        </div>
        <div className={s.arrows}>
          <div className={s.arrow_left} onClick={clickLeft}></div>
          <div className={s.arrow_right} onClick={clickRight}></div>
        </div>
        <NavLink to='/catalog' className={s.link}>
          <button className={s.btn_see_all}>See all</button>
        </NavLink>
      </section>
    </>
  );
};

export default SectionPizzas;

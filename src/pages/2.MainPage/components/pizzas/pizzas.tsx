import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import Pizza from './components/pizza/pizza';
import s from './pizzas.module.scss';

import baconUrl from '../../../../assets/pizzas/bacon.png';
import broccoliUrl from '../../../../assets/pizzas/broccoli.png';
import cheesemeatUrl from '../../../../assets/pizzas/cheesemeat.png';
import forestUrl from '../../../../assets/pizzas/forest.png';
import greekUrl from '../../../../assets/pizzas/greek.png';
import huntingUrl from '../../../../assets/pizzas/hunting.png';
import mushroomUrl from '../../../../assets/pizzas/mushroom.png';
import originalUrl from '../../../../assets/pizzas/original.png';
import pepperoniUrl from '../../../../assets/pizzas/pepperoni.png';
import rusticUrl from '../../../../assets/pizzas/rustic.png';
import salamiUrl from '../../../../assets/pizzas/salami.png';
import spicyUrl from '../../../../assets/pizzas/spicy.png';
import tomatoUrl from '../../../../assets/pizzas/tomato.png';
import vegetableUrl from '../../../../assets/pizzas/vegetable.png';
import vegetarianUrl from '../../../../assets/pizzas/vegetarian.png';

const SectionPizzas = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const [isAnimating, setIsAnimating] = useState(false);
  const [animateLeft, setAnimateLeft] = useState(false);

  const clickRight = (): void => {
    setIsAnimating(true);
    setAnimateLeft(true);
    setTimeout(() => {
      setStartIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex >= pizzaData.length) {
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
          return pizzaData.length - 1;
        }
        return newIndex;
      });
      setIsAnimating(false);
    }, 1000);
  };

  const pizzaData = [
    { link: pepperoniUrl, name: 'Pepperoni', cost: ['32.00$', '25.00$', '18.00$'] },
    { link: salamiUrl, name: 'Salami', cost: ['25.00$', '20.00$', '15.00$'] },
    { link: rusticUrl, name: 'Rustic', cost: ['20.00$', '15.00$', '10.00$'] },
    { link: greekUrl, name: 'Greek', cost: ['25.00$', '20.00$', '15.00$'] },
    { link: cheesemeatUrl, name: 'Cheese&meat', cost: ['20.00$', '15.00$', '10.00$'] },
    { link: mushroomUrl, name: 'Mushroom', cost: ['45.00$', '30.00$', '25.00$'] },
    { link: vegetableUrl, name: 'Vegetable', cost: ['15.00$', '12.00$', '8.00$'] },
    { link: originalUrl, name: 'Original', cost: ['35.00$', '27.00$', '21.00$'] },
    { link: tomatoUrl, name: 'Tomato', cost: ['20.00$', '15.00$', '10.00$'] },
    { link: vegetarianUrl, name: 'Vegetarian', cost: ['17.00$', '12.00$', '6.00$'] },
    { link: baconUrl, name: 'Bacon', cost: ['37.00$', '28.00$', '23.00$'] },
    { link: broccoliUrl, name: 'Brocolli', cost: ['25.00$', '15.00$', '10.00$'] },
    { link: huntingUrl, name: 'Hunting', cost: ['32.00$', '24.00$', '19.00$'] },
    { link: forestUrl, name: 'Forest', cost: ['32.00$', '18.00$', '14.00$'] },
    { link: spicyUrl, name: 'Spicy', cost: ['22.00$', '17.00$', '12.00$'] },
  ];

  const visiblePizzas = [];

  for (let i = startIndex - 1; i <= startIndex + itemsPerPage; i += 1) {
    const pizzaIndex = (i + pizzaData.length) % pizzaData.length;
    visiblePizzas.push(pizzaData[pizzaIndex]);
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

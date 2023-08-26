import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './pizza.module.scss';

import { PizzaType } from '../../../../../types/types';

import PizzaParams from '../catalog-pizzaParams/pizzaParams';

const Pizza = (props: PizzaType) => {
  const arrayPizzaParams = [
    {
      size: 'L',
      length: '45cm',
      price: props.cost[0],
    },
    {
      size: 'M',
      length: '30cm',
      price: props.cost[1],
    },
    {
      size: 'S',
      length: '25cm',
      price: props.cost[2],
    },
  ];

  const pizzaSizes = ['L', 'M', 'S'];

  return (
    <div className={s.pizza_item_catalog}>
      <div className={s.pizza_content}>
        <img src={props.link} className={s.pizza_img} alt='pizza' />
        <h3 className={s.pizza_name}>{props.name}</h3>
        <div className={s.pizza_ingredients}>{props.mainIngredients}</div>
        <div className={s.size_links}>
          {pizzaSizes.map((_, index) => (
            <NavLink to='/details' className={s.size_link} key={index}>
              {pizzaSizes[index]}
            </NavLink>
          ))}
        </div>
      </div>
      <div className={s.pizza_params}>
        {arrayPizzaParams.map((pizza, index) => (
          <PizzaParams size={pizza.size} length={pizza.length} price={pizza.price} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Pizza;

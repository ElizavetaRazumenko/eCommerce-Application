import { ClassNames } from '@emotion/react';

import s from './pizza.module.css';

import { PizzaType } from '../../../../../../types/types';

import PizzaParams from '../pizzaParams/pizzaParams';

const Pizza = (props: PizzaType) => {
  return (
    <div className='pizza_item'>
      <img src={props.link} className='pizza-img img-peperoni' alt='pizza' />
      <h3 className='item-title'>{props.name}</h3>
      <PizzaParams size='L' length='45cm' price={props.cost[0]} />
      <PizzaParams size='M' length='30cm' price={props.cost[1]} />
      <PizzaParams size='S' length='25cm' price={props.cost[2]} />
    </div>
  );
};

export default Pizza;

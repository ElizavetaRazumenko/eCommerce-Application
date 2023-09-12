import s from './pizza.module.scss';

import { PizzaType } from '../../../../../../types/types';

import PizzaParams from '../pizzaParams/pizzaParams';

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
  return (
    <div className={s.pizza_item}>
      <img src={props.link} className={s.pizza_img} alt='pizza' />
      <h3 className={s.pizza_name}>{props.name}</h3>
      {arrayPizzaParams.map((pizza, index) => (
        <PizzaParams size={pizza.size} length={pizza.length} price={pizza.price} key={index} />
      ))}
    </div>
  );
};

export default Pizza;

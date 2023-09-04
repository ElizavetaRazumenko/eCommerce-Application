import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './pizza.module.scss';

import infoProducts from '../../../../../entities/product';
import { PizzaCatalogType } from '../../../../../types/types';

import PizzaParams from '../catalog-pizzaParams/pizzaParams';

const Pizza = (props: PizzaCatalogType) => {
  const key = infoProducts.pizzas.find((el) => el.name === props.name)?.key;
  const arrayPizzaParams = [
    {
      size: 'L',
      length: '45cm',
      price: props.cost[0],
      discount: props.discounts[0] || '',
    },
    {
      size: 'M',
      length: '30cm',
      price: props.cost[1],
      discount: props.discounts[1] || '',
    },
    {
      size: 'S',
      length: '25cm',
      price: props.cost[2],
      discount: props.discounts[2] || '',
    },
  ];
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients');

  return (
    <div className={s.pizza_item}>
      <div className={s.pizza_content}>
        <img src={props.link[0].url} className={s.pizza_img} alt='pizza' />
        <h3 className={s.pizza_name}>{props.name}</h3>
        <div className={s.pizza_ingredients}>
          {props.description.slice(mainIngredientsStartIndex)}
        </div>
        <div className={s.size_links}>
          <NavLink to={`/details/${key?.toLowerCase()}/l`} className={s.size_link}>
            L
          </NavLink>
          <NavLink to={`/details/${key?.toLowerCase()}/m`} className={s.size_link}>
            M
          </NavLink>
          <NavLink to={`/details/${key?.toLowerCase()}/s`} className={s.size_link}>
            S
          </NavLink>
        </div>
      </div>
      <div className={s.pizza_params}>
        {arrayPizzaParams.map((pizza, index) => (
          <PizzaParams
            size={pizza.size}
            length={pizza.length}
            price={pizza.price}
            key={index}
            discount={pizza.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default Pizza;

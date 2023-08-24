import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';

import s from './pizza.module.scss';

import { PizzaType } from '../../../../../types/types';

import PizzaParams from '../catalog-pizzaParams/pizzaParams';

const Pizza = (props: PizzaType) => {
  const [isHovered, setIsHovered] = useState(false);

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

  const pizzaSizes = ['large', 'middle', 'small'];

  return (
    <div
      className={`${s.pizza_item_catalog} ${isHovered ? s.hovered : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={s.image_wrapper}>
        <img src={props.link} className={s.pizza_img} alt='pizza' />
      </div>
      <div className={s.overlay}></div>
      <h3 className={s.pizza_name}>{props.name}</h3>
      <div className={s.pizza_params}>
        {props.cost.map((price, index) => (
          <PizzaParams
            size={arrayPizzaParams[index].size}
            length={arrayPizzaParams[index].length}
            price={price}
            key={index}
          />
        ))}
      </div>
      {isHovered && (
        <div className={s.size_links}>
          {pizzaSizes.map((size, index) => (
            <NavLink to='/detailed' className={s.size_link} key={index}>
              {size}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default Pizza;

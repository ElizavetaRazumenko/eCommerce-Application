import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './pizza.module.scss';

import { PizzaCatalogType } from '../../../../../types/types';

import PizzaParams from '../catalog-pizzaParams/pizzaParams';

const Pizza = (props: PizzaCatalogType) => {
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
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients');

  const setPriceAndWeigth = (price: string, weigth: string) => {
    props.setProductDetailes.setProductPrice(price);
    props.setProductDetailes.setProductWeigth(weigth);
  };

  const setDetailes = (size: string) => {
    props.setProductDetailes.setProductName(props.name);
    props.setProductDetailes.setProductDescription(props.description);
    size === 'l'
      ? setPriceAndWeigth(props.cost[0], '945gr')
      : size === 'm'
      ? setPriceAndWeigth(props.cost[1], '632gr')
      : setPriceAndWeigth(props.cost[2], '210gr');
    props.setProductDetailes.setProductImg(props.link.map((img) => img.url));
    props.setProductDetailes.setProductType('pizzas');
  };

  return (
    <div className={s.pizza_item}>
      <div className={s.pizza_content}>
        <img src={props.link[0].url} className={s.pizza_img} alt='pizza' />
        <h3 className={s.pizza_name}>{props.name}</h3>
        <div className={s.pizza_ingredients}>
          {props.description.slice(mainIngredientsStartIndex)}
        </div>
        <div className={s.size_links}>
          <NavLink to='/details' className={s.size_link} onClick={() => setDetailes('l')}>
            L
          </NavLink>
          <NavLink to='/details' className={s.size_link} onClick={() => setDetailes('m')}>
            M
          </NavLink>
          <NavLink to='/details' className={s.size_link} onClick={() => setDetailes('s')}>
            S
          </NavLink>
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

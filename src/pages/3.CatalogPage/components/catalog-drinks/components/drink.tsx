import React from 'react';

import { useNavigate } from 'react-router-dom';

import s from './drink.module.scss';

import { DrinkTypeCatalog } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const navigateDetailed = useNavigate();

  const navigateItemClick = () => {
    navigateDetailed('/detailed');
  };

  return (
    <div className={s.item_drink} onClick={navigateItemClick}>
      <img src={props.link} className={s.drink_img} alt='drink' />
      <p className={s.name}>{props.name}</p>
      <p className={s.description}>{props.description}</p>
      <button className={s.btn_add_drink}>Add to cart</button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

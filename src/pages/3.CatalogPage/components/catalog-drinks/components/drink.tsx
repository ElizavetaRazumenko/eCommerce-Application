import React from 'react';

import { useNavigate } from 'react-router-dom';

import s from './drink.module.scss';

import { DrinkType } from '../../../../../types/types';

const Drink = (props: DrinkType) => {
  const navigateDetailed = useNavigate();

  const navigateItemClick = () => {
    navigateDetailed('/detailed');
  };

  return (
    <div className={s.item_drink} onClick={navigateItemClick}>
      <img src={props.link} className={s.drink_img} alt='drink' />
      <button className={s.btn_add_drink}>Add to cart</button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

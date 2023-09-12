import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import infoProducts from '../../../../../entities/product';
import { DrinkTypeCatalog } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const key = infoProducts.drinks.find((el) => el.name === props.name)?.key;

  const [inCart, setInCart] = useState(false);

  const toggleInCart = () => {
    setInCart(!inCart);
  };

  const buttonText = inCart ? 'In Cart' : '';

  const buttonClasses = `${s.btn_add_drink} ${inCart ? s.in_cart : ''}`;

  return (
    <div className={s.item_drink}>
      <img src={props.link[0].url} className={s.drink_img} alt='drink' />
      <div className={s.hover_link}>
        <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
          details
        </NavLink>
      </div>
      <p className={s.name}>{props.name}</p>
      <p className={s.description}>{props.description}</p>
      <button className={buttonClasses} onClick={toggleInCart} disabled={inCart}>
        {buttonText}
      </button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

import React, { useState } from 'react';

import s from './pizzaParams.module.scss';

import cartUrl from '../../../../../assets/png/cart.png';
import { PizzaParamsCatalogType } from '../../../../../types/types';

const PizzaParams = (props: PizzaParamsCatalogType) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setIsButtonDisabled(true);
  };

  const buttonClasses = `${s.btn_add_pizza} ${isClicked ? s.in_cart : ''}`;
  const imageStyle = isClicked ? { opacity: 0.5 } : {};
  const textInCartStyle = isClicked ? { opacity: 1 } : {};

  return (
    <div className={s.pizza_title}>
      <div className={s.size_wrapper}>
        <span className={s.span_line}>{props.size}</span>
        <span className={s.span_size}>{props.length}</span>
      </div>
      <div className={s.price_wrapper}>
        <div className={props.discount.length > 0 ? s.span_price + ' ' + s.sale : s.hidden}>
          {props.discount}
        </div>
        <div
          className={props.discount.length > 0 ? s.span_price + ' ' + s.non_actual : s.span_price}
        >
          {props.price}
        </div>
        <button onClick={handleClick} className={buttonClasses} disabled={isButtonDisabled}>
          <img src={cartUrl} className={s.shopping_cart} alt='shopping cart' style={imageStyle} />
          <span className={s.text_in_cart} style={textInCartStyle}>
            in cart
          </span>
        </button>
      </div>
    </div>
  );
};

export default PizzaParams;

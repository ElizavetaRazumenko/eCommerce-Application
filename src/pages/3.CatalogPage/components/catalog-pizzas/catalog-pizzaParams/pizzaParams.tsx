import { useState } from 'react';

import s from './pizzaParams.module.scss';

import { addPizzaToCart } from '../../../../../shared/cartSession';
import { PizzaParamsCatalogType } from '../../../../../types/types';

const PizzaParams = (props: PizzaParamsCatalogType) => {
  const [onCart, setOnCart] = useState(props.onCart);
  const [waiting, setWaiting] = useState('none');
  const addToCart = async () => {
    if (!onCart) {
      setWaiting('waiting');
      await addPizzaToCart(props.findData.key!, props.findData.size);
      setWaiting('none');
      setOnCart(true);
    }
  };

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
        <div
          className={onCart ? `${s.shopping_cart} ${s.disabled}` : s.shopping_cart}
          onClick={addToCart}
        >
          <div className={s[waiting]}></div>
        </div>
      </div>
    </div>
  );
};

export default PizzaParams;

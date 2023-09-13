import { LineItem } from '@commercetools/platform-sdk';

import { useRef } from 'react';

import s from './pizzaParams.module.scss';

import { addPizzaToCart } from '../../../../../shared/cartSession';
import { PizzaParamsCatalogType } from '../../../../../types/types';

const PizzaParams = (props: PizzaParamsCatalogType) => {
  const cartRef = useRef<HTMLDivElement>(null);
  const addToCart = async () => {
    if (!cartRef.current!.classList.contains(s.disabled)) {
      await addPizzaToCart(props.findData.key!, props.findData.size);
      cartRef.current!.classList.add(s.disabled);
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
        <div className={s.shopping_cart} onClick={addToCart} ref={cartRef}></div>
      </div>
    </div>
  );
};

export default PizzaParams;

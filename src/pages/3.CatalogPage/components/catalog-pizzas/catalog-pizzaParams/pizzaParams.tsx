import s from './pizzaParams.module.scss';

import {
  getAnonymousCarts,
  createAnonymousCarts,
  getCurrentAnonimousCart,
} from '../../../../../shared/cartSession';
import { PizzaParamsCatalogType } from '../../../../../types/types';

const PizzaParams = (props: PizzaParamsCatalogType) => {
  const getCart = async () => {
    await createAnonymousCarts();
    const info = await getCurrentAnonimousCart();
    console.log(info);
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
        <div className={s.shopping_cart} onClick={getCart}></div>
      </div>
    </div>
  );
};

export default PizzaParams;

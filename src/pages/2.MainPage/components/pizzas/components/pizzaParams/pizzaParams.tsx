import s from './pizzaParams.module.scss';

import { PizzaParamsType } from '../../../../../../types/types';

const PizzaParams = (props: PizzaParamsType) => {
  return (
    <div className={s.pizza_title}>
      <div>
        <span className={s.span_line}>{props.size}</span>
        <span className={s.span_size}>{props.length}</span>
      </div>
      <div className={s.price_wrapper}>
        <div className={s.span_price}>{props.price}</div>
      </div>
    </div>
  );
};

export default PizzaParams;

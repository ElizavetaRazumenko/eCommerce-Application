import { useState } from 'react';

import { pizzaCartProps } from '../../../../../types/types';
import s from '../pizzas.module.scss';

const PizzaItem = (props: pizzaCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  return (
    <div className={s.pizza_wrapper}>
      <img src={props.image} alt='pizza' className={s.image} />
      <div className={s.info}>
        <p className={s.name}>{props.name}</p>
        <p className={s.size}>{props.size}</p>
        <div className={s.count_wrapper}>
          <p className={s.params}>{`Quantity: ${quantity}`}</p>
          <div className={s.change_count_wrappper}>
            <div className={s.up} onClick={increaseQuantity}></div>
            <div className={s.down} onClick={reduceQuantity}></div>
          </div>
        </div>
        <p className={s.params}>Total cost:</p>
        <div className={s.price_wrapper}>
          <p className={props.discount !== '' ? `${s.params} ${s.non_discount}` : s.params}>
            {props.price}
          </p>
          <p className={props.discount !== '' ? `${s.params} ${s.discount}` : s.hidden}>
            {props.discount}
          </p>
        </div>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default PizzaItem;

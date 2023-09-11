import { useState } from 'react';

import s from './pizza.module.scss';

import pizzaUrl from '../../../../assets/pizzas/broccoli.png';

const Pizza = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  return (
    <div className={s.pizza_wrapper}>
      <img src={pizzaUrl} alt='pizza' className={s.image} />
      <div className={s.info}>
        <p className={s.name}>Pepperoni</p>
        <p className={s.size}>L-size</p>
        <div className={s.count_wrapper}>
          <p className={s.params}>{`Quantity: ${quantity}`}</p>
          <div className={s.change_count_wrappper}>
            <div className={s.up} onClick={increaseQuantity}></div>
            <div className={s.down} onClick={reduceQuantity}></div>
          </div>
        </div>
        <p className={s.params}>Total cost:</p>
        <div className={s.price_wrapper}>
          <p className={`${s.params} ${s.non_discount}`}>55.00$</p>
          <p className={`${s.params} ${s.discount}`}>45.00$</p>
        </div>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default Pizza;

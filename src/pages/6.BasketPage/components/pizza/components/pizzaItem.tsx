import { useState } from 'react';

import { addPizzaToCart, removeOneProductOnCart } from '../../../../../shared/cartSession';

import { PizzaCartProps } from '../../../../../types/types';
import s from '../pizzas.module.scss';

const PizzaItem = (props: PizzaCartProps) => {
  const [quantity, setQuantity] = useState(`${props.quantity}`);
  const increaseQuantity = async () => {
    const sum = quantity;
    setQuantity('-');
    await addPizzaToCart(props.keyRequest, props.size[0].toLowerCase());
    setQuantity(`${+sum + 1}`);
  };
  const reduceQuantity = async () => {
    if (+quantity > 1) {
      const sum = quantity;
      setQuantity('-');
      await removeOneProductOnCart(props.idRequets, `${props.keyRequest}-${props.size[0]}`);
      setQuantity(`${+sum - 1}`);
    }
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

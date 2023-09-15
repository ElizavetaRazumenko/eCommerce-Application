import { useRef, useState } from 'react';

import {
  addPizzaToCart,
  removeOneProductOnCart,
  removeProductOnCart,
} from '../../../../../shared/cartSession';

import { PizzaCartProps } from '../../../../../types/types';
import s from '../pizzas.module.scss';

const PizzaItem = (props: PizzaCartProps) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const elementRef = useRef<HTMLDivElement>(null);
  const increaseQuantity = async () => {
    setQuantity(quantity + 1);
    const cart = await addPizzaToCart(props.keyRequest, props.size[0].toLowerCase());
    props.setTotalPrice((cart!.totalPrice.centAmount / 100).toFixed(2));
  };
  const reduceQuantity = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const cart = await removeOneProductOnCart(
        props.idRequets,
        `${props.keyRequest}-${props.size[0]}`,
      );
      props.setTotalPrice((cart!.totalPrice.centAmount / 100).toFixed(2));
    }
  };
  const removeItem = async () => {
    await removeProductOnCart(props.idRequets, `${props.keyRequest}-${props.size[0]}`);
    elementRef.current!.classList.add(s.hidden);
  };
  return (
    <div className={s.pizza_wrapper} ref={elementRef}>
      <img src={props.image} alt='pizza' className={s.image} />
      <div className={s.info}>
        <p className={s.name}>{props.name}</p>
        <p className={s.size}>{props.size}</p>
        <div className={s.count_wrapper}>
          <p className={s.params}>{`Quantity: ${quantity}`}</p>
          <div className={s.change_count_wrappper}>
            <div className={s.up} onClick={increaseQuantity}></div>
            <div
              className={+quantity === 1 ? `${s.down} ${s.block}` : s.down}
              onClick={reduceQuantity}
            ></div>
          </div>
        </div>
        <p className={s.params}>Total cost:</p>
        <div className={s.price_wrapper}>
          <p className={props.discount !== 0 ? `${s.params} ${s.non_discount}` : s.params}>
            {`${(props.price * +quantity).toFixed(2)}$`}
          </p>
          <p className={props.discount !== 0 ? `${s.params} ${s.discount}` : s.hidden}>
            {`${(props.discount * +quantity).toFixed(2)}$`}
          </p>
        </div>
        <button className={s.btn} onClick={removeItem}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default PizzaItem;

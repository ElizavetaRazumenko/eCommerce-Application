import { useState } from 'react';

import { ProductCartProps } from '../../../../../types/types';

import s from '../drinkSauce.module.scss';
const ProductItem = (props: ProductCartProps) => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  return (
    <div className={s.wrapper}>
      <div className={s.img_wrapper}>
        <img src={props.image} alt='pizza' className={s.image} />
      </div>
      <div className={s.info}>
        <p className={s.name}>Pepperoni</p>
        <div className={s.count_wrapper}>
          <p className={s.params}>{`Quantity: ${quantity}`}</p>
          <div className={s.change_count_wrappper}>
            <div className={s.up} onClick={increaseQuantity}></div>
            <div className={s.down} onClick={reduceQuantity}></div>
          </div>
        </div>
        <p className={s.params}>{`Total cost: ${props.price}`}</p>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default ProductItem;

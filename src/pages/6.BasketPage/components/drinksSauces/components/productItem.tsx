import { useState } from 'react';

import { addProductsToCart, removeOneProductOnCart } from '../../../../../shared/cartSession';

import { ProductCartProps } from '../../../../../types/types';

import s from '../drinkSauce.module.scss';
const ProductItem = (props: ProductCartProps) => {
  const [quantity, setQuantity] = useState(`${props.quantity}`);
  const increaseQuantity = async () => {
    const sum = quantity;
    setQuantity('-');
    await addProductsToCart(props.keyRequest);
    setQuantity(`${+sum + 1}`);
  };
  const reduceQuantity = async () => {
    if (+quantity > 1) {
      const sum = quantity;
      setQuantity('-');
      await removeOneProductOnCart(props.idRequets, `${props.keyRequest}-`);
      setQuantity(`${+sum - 1}`);
    }
  };
  return (
    <div className={s.wrapper}>
      <div className={s.img_wrapper}>
        <img src={props.image} alt='pizza' className={s.image} />
      </div>
      <div className={s.info}>
        <p className={s.name}>{props.name}</p>
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
        <p className={s.params}>{`Total cost: ${props.price}`}</p>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default ProductItem;

import { useState } from 'react';

import { addProductsToCart, removeOneProductOnCart } from '../../../../../shared/cartSession';

import { ProductCartProps } from '../../../../../types/types';

import s from '../drinkSauce.module.scss';
const ProductItem = (props: ProductCartProps) => {
  const [quantity, setQuantity] = useState(props.quantity);
  const increaseQuantity = async () => {
    setQuantity(quantity + 1);
    const cart = await addProductsToCart(props.keyRequest);
    props.setTotalPrice((cart!.totalPrice.centAmount / 100).toFixed(2));
  };
  const reduceQuantity = async () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      const cart = await removeOneProductOnCart(props.idRequets, `${props.keyRequest}-`);
      props.setTotalPrice((cart!.totalPrice.centAmount / 100).toFixed(2));
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
        <p className={s.params}>{`Total cost: ${(props.price * +quantity).toFixed(2)}$`}</p>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default ProductItem;

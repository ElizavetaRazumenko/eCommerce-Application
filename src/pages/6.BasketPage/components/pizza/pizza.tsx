import { DiscountedPrice, LineItem } from '@commercetools/platform-sdk';
import { useState } from 'react';

import s from './pizza.module.scss';

import pizzaUrl from '../../../../assets/pizzas/broccoli.png';

const Pizza = (props: { pizzas: LineItem[] }) => {
  const [isDiscount, setisDiscount] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  const setSize = (sku: string) => {
    return `${sku.slice(-1)}-size`;
  };
  const getPrice = (value: number) => {
    return `${(value / 100).toFixed(2)}$`;
  };
  const defineDiskountPrice = (params: DiscountedPrice | undefined) => {
    if (params) {
      setisDiscount(true);
      return `${(params!.value.centAmount / 100).toFixed(2)}$`;
    } else return '';
  };
  console.log(props.pizzas);
  // const pizzasItems = () => {
  //   return props.pizzas.map((pizza) => {
  //     return (
  //       <div className={s.pizza_wrapper}>
  //         <img src={pizza.variant.images![0].url} alt='pizza' className={s.image} />
  //         <div className={s.info}>
  //           <p className={s.name}>{pizza.name['en-US']}</p>
  //           <p className={s.size}>{setSize(pizza.variant.sku!)}</p>
  //           <div className={s.count_wrapper}>
  //             <p className={s.params}>{`Quantity: ${quantity}`}</p>
  //             <div className={s.change_count_wrappper}>
  //               <div className={s.up} onClick={increaseQuantity}></div>
  //               <div className={s.down} onClick={reduceQuantity}></div>
  //             </div>
  //           </div>
  //           <p className={s.params}>Total cost:</p>
  //           <div className={s.price_wrapper}>
  //             <p className={isDiscount ? `${s.params} ${s.non_discount}` : s.params}>
  //               {getPrice(pizza.price.value.centAmount)}
  //             </p>
  //             <p className={isDiscount ? `${s.params} ${s.discount}` : s.hidden}>
  //               {defineDiskountPrice(pizza.price.discounted)}
  //             </p>
  //           </div>
  //           <button className={s.btn}>Remove</button>
  //         </div>
  //       </div>
  //     );
  //   });
  // };
  return (
    <>
      {props.pizzas.map((pizza) => {
        return (
          <div className={s.pizza_wrapper}>
            <img src={pizza.variant.images![0].url} alt='pizza' className={s.image} />
            <div className={s.info}>
              <p className={s.name}>{pizza.name['en-US']}</p>
              <p className={s.size}>{setSize(pizza.variant.sku!)}</p>
              <div className={s.count_wrapper}>
                <p className={s.params}>{`Quantity: ${quantity}`}</p>
                <div className={s.change_count_wrappper}>
                  <div className={s.up} onClick={increaseQuantity}></div>
                  <div className={s.down} onClick={reduceQuantity}></div>
                </div>
              </div>
              <p className={s.params}>Total cost:</p>
              <div className={s.price_wrapper}>
                <p className={isDiscount ? `${s.params} ${s.non_discount}` : s.params}>
                  {getPrice(pizza.price.value.centAmount)}
                </p>
                <p className={isDiscount ? `${s.params} ${s.discount}` : s.hidden}>
                  {defineDiskountPrice(pizza.price.discounted)}
                </p>
              </div>
              <button className={s.btn}>Remove</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Pizza;

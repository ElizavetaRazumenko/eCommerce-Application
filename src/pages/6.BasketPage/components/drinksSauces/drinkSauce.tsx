import { useState } from 'react';

import s from './drinkSauce.module.scss';

import DrinkURL from '../../../../assets/drinks/cola.png';
import SauceURL from '../../../../assets/sauces/barbecue.png';

const DrinksSauceItem = () => {
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    quantity > 0 ? setQuantity(quantity - 1) : setQuantity(0);
  };
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.img_wrapper}>
          <img src={SauceURL} alt='pizza' className={s.image} />
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
          <p className={s.params}>Total cost: 55.00$</p>
          <button className={s.btn}>Remove</button>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.img_wrapper}>
          <img src={DrinkURL} alt='pizza' className={s.image} />
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
          <p className={s.params}>Total cost: 55.00$</p>
          <button className={s.btn}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default DrinksSauceItem;

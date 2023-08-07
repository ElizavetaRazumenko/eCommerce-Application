import s from './drink.module.css';

import { DrinkType } from '../../../../../types/types';

const Drink = (props: DrinkType) => {
  return (
    <div className={s.item_drink}>
      <img src={props.link} className={s.drink_img} alt='drink' />
      <button className={s.btn_add_drink}>Add to cart</button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

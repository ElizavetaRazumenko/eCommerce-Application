import s from './drink.module.scss';

import { DrinkType } from '../../../../../types/types';

const Drink = (props: DrinkType) => {
  return (
    <div className={s.item_drink}>
      <img src={props.link} className={s.drink_img} alt='drink' />
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

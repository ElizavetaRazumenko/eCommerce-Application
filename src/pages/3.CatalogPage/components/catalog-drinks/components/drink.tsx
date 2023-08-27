import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import { DrinkTypeCatalog } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  return (
    <div className={s.item_drink}>
      <img src={props.link} className={s.drink_img} alt='drink' />
      <div className={s.hover_link}>
        <NavLink to='/details' className={s.details_link}>
          details
        </NavLink>
      </div>
      <p className={s.name}>{props.name}</p>
      <p className={s.description}>{props.description}</p>
      <button className={s.btn_add_drink}>Add to cart</button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

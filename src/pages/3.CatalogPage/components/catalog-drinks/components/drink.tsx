import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import infoProducts from '../../../../../entities/product';
import { addProductsToCart } from '../../../../../shared/cartSession';
import { DrinkTypeCatalog } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const drinkRef = useRef<HTMLButtonElement>(null);
  const key = infoProducts.drinks.find((el) => el.name === props.name)?.key;
  const addToCart = async () => {
    if (!drinkRef.current!.classList.contains(s.disabled)) {
      await addProductsToCart(key!);
      drinkRef.current!.classList.add(s.disabled);
    }
  };
  return (
    <div className={s.item_drink}>
      <img src={props.link[0].url} className={s.drink_img} alt='drink' />
      <div className={s.hover_link}>
        <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
          details
        </NavLink>
      </div>
      <p className={s.name}>{props.name}</p>
      <p className={s.description}>{props.description}</p>
      <button className={s.btn_add_drink} onClick={addToCart} ref={drinkRef}>
        Add to cart
      </button>
      <div className={s.drink_price}>{props.price}</div>
    </div>
  );
};

export default Drink;

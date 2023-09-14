import { useRef } from 'react';
import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import infoProducts, { productIdOnCart } from '../../../../../entities/product';
import { addProductsToCart, removeProductOnCart } from '../../../../../shared/cartSession';
import { DrinkTypeCatalog, KeyObject } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const drinkRef = useRef<HTMLButtonElement>(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [onCart, setOnCart] = useState(props.onCart);
  const [buttonMessage, setButtonMessage] = useState(props.onCart ? 'Remove' : 'Add to cart');
  const [waiting, setWaiting] = useState('none');

  const key = infoProducts.drinks.find((el) => el.name === props.name)?.key;
  const addToCart = async () => {
    if (!onCart) {
      setWaiting('waiting');
      setButtonMessage('');
      await addProductsToCart(key!);
      setWaiting('none');
      setButtonMessage('Remove');
      setOnCart(true);
    } else {
      setWaiting('waiting');
      setButtonMessage('');
      setOnCart(false);
      await removeProductOnCart(productIdOnCart[props.sku as KeyObject]);
      setButtonMessage('Add to cart');
      setWaiting('none');
    }
  };
  return (
    <div className={s.item_drink} ref={ref}>
      {inView && (
        <>
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
        </>
      )}
    </div>
  );
};

export default Drink;

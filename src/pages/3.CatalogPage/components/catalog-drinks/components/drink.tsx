
import { useRef, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { NavLink } from 'react-router-dom';

import s from './drink.module.scss';

import infoProducts, { productIdOnCart } from '../../../../../entities/product';
import { addProductsToCart, removeProductOnCart } from '../../../../../shared/cartSession';
import { DrinkTypeCatalog, KeyObject } from '../../../../../types/types';

const Drink = (props: DrinkTypeCatalog) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [onCart, setOnCart] = useState(props.onCart);
  const [buttonMessage, setButtonMessage] = useState(props.onCart ? 'Remove' : 'Add to cart');
  const [isLoading, setLoading] = useState(true);

  const key = infoProducts.drinks.find((el) => el.name === props.name)?.key;

  const addToCart = async () => {
    if (!onCart) {
      setLoading(true);
      setButtonMessage('');
      await addProductsToCart(key!);
      setLoading(false);
      setButtonMessage('Remove');
      setOnCart(true);
    } else {
      setLoading(true);
      setButtonMessage('');
      setOnCart(false);
      await removeProductOnCart(productIdOnCart[props.sku as KeyObject], props.sku);
      setButtonMessage('Add to cart');
      setLoading(false);
    }
  };

  useEffect(() => {
    if (inView) {
      setLoading(true);
    }
  }, [inView]);

  return (
    <div className={s.item_drink} ref={ref} style={{ position: 'relative' }}>
      {isLoading && (
        <div className={s.indicator} style={{ position: 'absolute', bottom: 0, left: 0 }}>
          <div className={s.indicator_loader}></div>
        </div>
      )}
      {inView && (
        <>
          <img
            src={props.link[0].url}
            className={s.drink_img}
            alt='drink'
            onLoad={() => {
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          />
          <div className={s.hover_link}>
            <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
              details
            </NavLink>
          </div>
          <p className={s.name}>{props.name}</p>
          <p className={s.description}>{props.description}</p>
          <button className={s.btn_add_drink} onClick={addToCart}>
            {buttonMessage}
            <div className={s[waiting]}></div>
          </button>
          <div className={s.drink_price}>{props.price}</div>
        </>
      )}
    </div>
  );
};

export default Drink;

import { useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { NavLink } from 'react-router-dom';

import s from './sauce.module.scss';

import infoProducts, { productIdOnCart } from '../../../../../entities/product';
import { addProductsToCart, removeProductOnCart } from '../../../../../shared/cartSession';
import { KeyObject, SauceTypeCatalog } from '../../../../../types/types';

const Sauce = (props: SauceTypeCatalog) => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [onCart, setOnCart] = useState(props.onCart);
  const [buttonMessage, setButtonMessage] = useState(props.onCart ? 'Remove' : 'Add to cart');
  const [waiting, setWaiting] = useState('none');

  const key = infoProducts.sauces.find((el) => el.name === props.name)?.key;
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
      await removeProductOnCart(productIdOnCart[props.sku as KeyObject], props.sku);
      setButtonMessage('Add to cart');
      setWaiting('none');
    }
  };
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients') + 18;
  return (
    <div className={s.item_sauce} ref={ref}>
      {inView && (
        <>
          <img src={props.link[0].url} className={s.sauce_img} alt='souce' />
          <div className={s.hover_link}>
            <NavLink to={`/details/${key?.toLowerCase()}`} className={s.details_link}>
              details
            </NavLink>
          </div>
          <div className={s.sauce_info}>
            <h4 className={s.sauce_title}>{props.name}</h4>
            <h4 className={s.sauce_description}>
              {props.description.slice(mainIngredientsStartIndex)}
            </h4>
            <div className={s.sauce_price}>{props.price}</div>
            <button className={s.btn_add_sauce} onClick={addToCart}>
              {buttonMessage}
              <div className={s[waiting]}></div>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Sauce;

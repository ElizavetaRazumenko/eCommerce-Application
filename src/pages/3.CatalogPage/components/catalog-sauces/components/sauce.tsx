import { LineItem } from '@commercetools/platform-sdk';
import { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './sauce.module.scss';

import infoProducts from '../../../../../entities/product';
import { addProductsToCart } from '../../../../../shared/cartSession';
import { SauceTypeCatalog } from '../../../../../types/types';

const Sauce = (props: SauceTypeCatalog) => {
  const [onCart, setOnCart] = useState(false);
  const key = infoProducts.sauces.find((el) => el.name === props.name)?.key;
  const cartItemsString = localStorage.getItem('CartItems');
  if (cartItemsString && key) {
    const cartItems = JSON.parse(cartItemsString) as LineItem[];
    console.log(cartItems);
    // const currentItemOnCart = cartItems.find((el) => el.productKey === key)!.productKey;
    // if (currentItemOnCart) setOnCart(true);
  }

  const addToCart = async () => {
    if (!onCart) {
      await addProductsToCart(key!);
      setOnCart(true);
    }
  };
  const mainIngredientsStartIndex = props.description.indexOf('Main ingredients') + 18;
  return (
    <div className={s.item_sauce}>
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
        <button
          className={onCart ? `${s.btn_add_sauce} ${s.disabled}` : s.btn_add_sauce}
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Sauce;

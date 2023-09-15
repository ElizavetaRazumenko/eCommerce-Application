/* eslint-disable react-hooks/exhaustive-deps */
import { Cart, LineItem } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizza';
import PopUp from './components/popUp/popUp';

import { keysPizza } from '../../entities/product';

import { getCurrentAnonimousCart } from '../../shared/cartSession';
import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  const cartString = localStorage.getItem('Cart');
  const cart = JSON.parse(cartString!) as Cart;
  const cartItems = cart.lineItems as LineItem[];
  const [totalPrice, setTotalPrice] = useState('');
  const [pizzasItems, setPizzasItems] = useState<LineItem[]>([]);
  const [noPizzasItems, setNoPizzasItems] = useState<LineItem[]>([]);
  const getCartsInfo = async () => {
    const cartResponse = await getCurrentAnonimousCart();
    const cart = cartResponse!.body;
    localStorage.setItem('Cart', JSON.stringify(cart));
    setTotalPrice((cart.totalPrice.centAmount / 100).toFixed(2));
    // setPizzasItems(cartItems.filter((el) => keysPizza.includes(el.productKey!)) || []);
    // setNoPizzasItems(cartItems.filter((el) => !keysPizza.includes(el.productKey!)) || []);
  };
  useEffect(() => {
    getCartsInfo();
  }, []);
  const [isOpenPopUp, setisOpenPopUp] = useState(false);
  const openPopUp = () => {
    setisOpenPopUp(true);
  };
  return (
    <>
      <PopUp isOpen={isOpenPopUp} setIsOpen={setisOpenPopUp} />
      <div className={s.basket_wrapper}>
        <div className={s.full_cart_wrapper}>
          <p className={s.header_message}>Added products</p>
          <div className={s.products}>
            <div className={s.pizzas}>
              <Pizza pizzas={pizzasItems} />
            </div>
            <div className={s.sauces_drinks}>
              <DrinksSauceItem products={noPizzasItems} />
            </div>
          </div>
          <div className={s.info_utils}>
            <form>
              <input type='text' className={s.promo_input} placeholder='Promocode' />
            </form>
            <p className={s.total_cost}>{`Total cost: ${totalPrice}$`}</p>
            <div className={s.button_delete} onClick={openPopUp}>
              Empty cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;

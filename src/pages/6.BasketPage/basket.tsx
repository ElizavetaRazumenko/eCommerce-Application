import { Cart, ClientResponse, LineItem } from '@commercetools/platform-sdk';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizza';
import PopUp from './components/popUp/popUp';

import { keysPizza } from '../../entities/product';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  useEffect(() => {
    if (localStorage.getItem('Cart')) {
      const cart = JSON.parse(localStorage.getItem('Cart')!) as Cart;
      setTotalPrice(cart.totalPrice.centAmount / 100);
    }
  }, []);
  const [isOpenPopUp, setisOpenPopUp] = useState(false);
  const openPopUp = () => {
    setisOpenPopUp(true);
  };

  const cartString = localStorage.getItem('Cart');
  const [isEmptyCart] = useState(cartString ? false : true);
  const [totalPrice, setTotalPrice] = useState(0);
  let cartItems: LineItem[] = [];
  const pizzasItems: LineItem[] = [];
  const noPizzasItems: LineItem[] = [];
  if (cartString) {
    const cart = JSON.parse(cartString) as Cart;
    cartItems = cart.lineItems as LineItem[];
    cartItems.forEach((item) => {
      keysPizza.includes(item.productKey!) ? pizzasItems.push(item) : noPizzasItems.push(item);
    });
  }
  return (
    <>
      <PopUp isOpen={isOpenPopUp} setIsOpen={setisOpenPopUp} />
      <div className={s.basket_wrapper}>
        <div className={isEmptyCart ? s.empty_cart_wrapper : s.hidden}>
          <p className={s.message}>
            Your cart is currently empty! We suggest going to the catalog page to place an order.
          </p>
          <div className={s.button_wrapper}>
            <Link to='/catalog' className={s.button}>
              To catalog
            </Link>
          </div>
        </div>
        <div className={isEmptyCart ? s.hidden : s.full_cart_wrapper}>
          <p className={s.header_message}>Added products</p>
          <div className={s.products}>
            <div className={s.pizzas}>
              <Pizza />
            </div>
            <div className={s.sauces_drinks}>
              <DrinksSauceItem />
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

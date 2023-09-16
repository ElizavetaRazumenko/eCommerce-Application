/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizzas';
import PopUp from './components/popUp/popUp';

import { getCurrentAnonimousCart } from '../../shared/cartSession';
import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  const [totalPrice, setTotalPrice] = useState('');
  const getCartsInfo = async () => {
    const cartResponse = await getCurrentAnonimousCart();
    const cart = cartResponse!.body;
    localStorage.setItem('Cart', JSON.stringify(cart));
    setTotalPrice((cart.totalPrice.centAmount / 100).toFixed(2));
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
              <Pizza setTotalPrice={setTotalPrice} />
            </div>
            <div className={s.sauces_drinks}>
              <DrinksSauceItem setTotalPrice={setTotalPrice} />
            </div>
          </div>
          <div className={s.info_utils}>
            <form>
              <input type='text' className={s.promo_input} placeholder='Promo code' />
              <button className={s.add_promo_btn}>Add</button>
            </form>
            <p className={s.total_cost}>{`Total cost: ${totalPrice}$`}</p>
            <div className={s.button_delete} onClick={openPopUp}>
              Clear cart
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;

import { useState } from 'react';
import { Link } from 'react-router-dom';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizza';
import PopUp from './components/popUp/popUp';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  const [isOpenPopUp, setisOpenPopUp] = useState(false);
  const openPopUp = () => {
    setisOpenPopUp(true);
  };
  return (
    <>
      <PopUp isOpen={isOpenPopUp} setIsOpen={setisOpenPopUp} />
      <div className={s.basket_wrapper}>
        <div className={s.hidden}>
          <p className={s.message}>
            Your cart is currently empty! We suggest going to the catalog page to place an order.
          </p>
          <div className={s.button_wrapper}>
            <Link to='/catalog' className={s.button}>
              To catalog
            </Link>
          </div>
        </div>
        <div className={s.full_cart_wrapper}>
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
            <p className={s.total_cost}>Total cost: 65.00$</p>
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

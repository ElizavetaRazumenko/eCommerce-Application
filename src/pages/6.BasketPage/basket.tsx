/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizzas';
import PopUp from './components/popUp/popUp';

import { getCurrentAnonimousCart } from '../../shared/cartSession';
import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const promoCodes = ['1111', '2222'];
  const changeValue = () => {
    setErrorMessage('');
    const value = inputRef.current!.value;
    setInputValue(value);
    if (!promoCodes.includes(value)) {
      setErrorMessage('Invalid promotional code');
    }
  };
  const submitPromo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
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
            <div className={s.form_wrapper}>
              <form onSubmit={(e) => submitPromo(e)}>
                <input
                  type='text'
                  className={s.promo_input}
                  placeholder='Promo code'
                  ref={inputRef}
                  value={inputValue}
                  onChange={changeValue}
                />
                <button className={s.add_promo_btn}>Add</button>
              </form>
              <p className={s.error_message}>{errorMessage}</p>
            </div>
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

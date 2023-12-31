/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from 'react';

import s from './basket.module.scss';
import DrinksSauceItem from './components/drinksSauces/drinkSauce';
import Pizza from './components/pizza/pizzas';
import PopUp from './components/popUp/popUp';

import { getCurrentAnonimousCart, submitPromoCode } from '../../shared/cartSession';
import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [totalPrice, setTotalPrice] = useState('');
  const [discountPrice, setDiskountPrice] = useState('');
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
  const submitPromo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (promoCodes.includes(inputRef.current!.value)) {
      const cart = await submitPromoCode(inputRef.current!.value);
      const updatePromoPrice = (cart.totalPrice.centAmount / 100).toFixed(2);
      setInputValue('');
      if (updatePromoPrice === discountPrice) {
        setErrorMessage(
          "The promo code has already been activated or doesn't affect the items in the cart",
        );
      }
      setDiskountPrice(updatePromoPrice);
    }
  };
  const getCartsInfo = async () => {
    const cartResponse = await getCurrentAnonimousCart();
    const cart = cartResponse!.body;
    localStorage.setItem('Cart', JSON.stringify(cart));
    let price = 0;
    cart.lineItems.forEach((el) => {
      price += el.price.value.centAmount * el.quantity;
    });
    setTotalPrice((price / 100).toFixed(2));
    if (cart.discountCodes.length) {
      setDiskountPrice((cart.totalPrice.centAmount / 100).toFixed(2));
    }
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
              <Pizza setTotalPrice={setTotalPrice} setDiscountPrice={setDiskountPrice} />
            </div>
            <div className={s.sauces_drinks}>
              <DrinksSauceItem setTotalPrice={setTotalPrice} setDiscountPrice={setDiskountPrice} />
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
            <div className={s.price_wrapper}>
              <p className={s.total_cost}>{`Total cost:`}</p>
              <p className={discountPrice ? s.undiscount : s.total_cost}>{`${totalPrice}$`}</p>
              <p className={discountPrice ? s.discount : s.hidden}>{`${discountPrice}$`}</p>
            </div>
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

import { Link } from 'react-router-dom';

import s from './basket.module.scss';
import Pizza from './components/pizza/pizza';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  return (
    <div className={s.basket_wrapper}>
      <div className={s.hidden}>
        <p className={s.message}>Cart is empty</p>
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
          <div className={s.sauces_drinks}></div>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

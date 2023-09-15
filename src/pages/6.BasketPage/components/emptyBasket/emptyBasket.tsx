import { Link } from 'react-router-dom';

import s from './emptyBasket.module.scss';

const EmptyBasket = () => {
  return (
    <div className={s.basket_wrapper}>
      <div>
        <p className={s.message}>
          Your cart is currently empty! We suggest going to the catalog page to place an order.
        </p>
        <div className={s.button_wrapper}>
          <Link to='/catalog' className={s.button}>
            To catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmptyBasket;

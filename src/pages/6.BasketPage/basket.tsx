import { Link } from 'react-router-dom';

import s from './basket.module.scss';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  return (
    <div className={s.basket_wrapper}>
      <div className={`${s.empty_wrapper} ${s.hidden}`}>
        <p className={s.message_empty}>Cart is empty</p>
        <div className={s.button_wrapper}>
          <Link to='/catalog' className={s.button}>
            To catalog
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BasketPage;

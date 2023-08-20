import s from './basket.module.scss';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  return (
    <div className={s.basket_wrapper}>
      <p className={s.welcome}>Welcome to the Cart Page!</p>
    </div>
  );
};

export default BasketPage;

import s from './basket.module.scss';

import { CartPropsType } from '../../types/types';

const BasketPage = (props: CartPropsType) => {
  return (
    <div className={s.basket_wrapper}>
      <p className={s.welcome}>Welcome to the Cart Page!</p>
      <p className={props.userState === 'Login' ? s.welcome_content : s.hidden}>
        Anonymous session
      </p>
    </div>
  );
};

export default BasketPage;

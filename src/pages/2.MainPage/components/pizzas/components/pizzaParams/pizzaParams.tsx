import s from './pizzaParams.module.css';

import cartUrl from '../../../../../../assets/png/cart.png';
import { PizzaParamsType } from '../../../../../../types/types';

const PizzaParams = (props: PizzaParamsType) => {
  return (
    <div className='pizza_title'>
      <div className='size_wrapper'>
        <span className='span-line span-l'>{props.size}</span>
        <span className='span-size size-l'>{props.length}</span>
      </div>
      <div className='price-wrapper'>
        <span className='span-price price-l'>{props.price}</span>
        <img src={cartUrl} className='shopping-cart' alt='shopping cart' />
      </div>
    </div>
  );
};

export default PizzaParams;

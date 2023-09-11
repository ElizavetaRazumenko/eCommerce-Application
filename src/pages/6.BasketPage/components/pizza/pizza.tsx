import s from './pizza.module.scss';

import pizzaUrl from '../../../../assets/pizzas/broccoli.png';

const Pizza = () => {
  return (
    <div className={s.pizza_wrapper}>
      <img src={pizzaUrl} alt='pizza' className={s.image} />
      <div className={s.info}>
        <p className={s.name}>Pepperoni</p>
        <p className={s.size}>L-size</p>
        <p className={s.params}>Quantity: 1</p>
        <div className={s.price_wrapper}>
          <p className={s.params}>Total cost:</p>
          <p className={`${s.params} ${s.non_discount}`}>55.00$</p>
          <p className={`${s.params} ${s.discount}`}>45.00$</p>
        </div>
        <button className={s.btn}>Remove</button>
      </div>
    </div>
  );
};

export default Pizza;

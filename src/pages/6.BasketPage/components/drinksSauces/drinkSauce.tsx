import s from './drinkSauce.module.scss';

import DrinkURL from '../../../../assets/drinks/cola.png';
import SauceURL from '../../../../assets/sauces/barbecue.png';

const DrinksSauceItem = () => {
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.img_wrapper}>
          <img src={SauceURL} alt='pizza' className={s.image} />
        </div>
        <div className={s.info}>
          <p className={s.name}>Pepperoni</p>
          <p className={s.params}>Quantity: 1</p>
          <p className={s.params}>Total cost: 55.00$</p>
          <button className={s.btn}>Remove</button>
        </div>
      </div>
      <div className={s.wrapper}>
        <div className={s.img_wrapper}>
          <img src={DrinkURL} alt='pizza' className={s.image} />
        </div>
        <div className={s.info}>
          <p className={s.name}>Pepperoni</p>
          <p className={s.params}>Quantity: 1</p>
          <p className={s.params}>Total cost: 55.00$</p>
          <button className={s.btn}>Remove</button>
        </div>
      </div>
    </>
  );
};

export default DrinksSauceItem;

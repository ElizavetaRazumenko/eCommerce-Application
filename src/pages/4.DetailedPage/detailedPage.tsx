import { NavLink } from 'react-router-dom';

import Slider from './components/slider';
import s from './detailedPage.module.scss';

const DetailedPage = () => {
  return (
    <div className={s.page_wrapper}>
      <NavLink to='/catalog' className={s.nav_link}>
        <div className={s.button_back}>
          <div className={s.arrow_back}></div>
          <span>Back to the catalog</span>
        </div>
      </NavLink>
      <div className={s.details_wrapper}>
        <Slider />
        <div className={s.description_wrapper}>
          <p className={s.name}>Pepperoni</p>
          <p className={s.description}>
            Pepperoni is a variety of spicy salami made from cured pork and beef seasoned with
            paprika or other chili pepper
          </p>
          <p className={s.description}>
            Main ingredients: salami, beef, cheese, tomato paste, mushrooms
          </p>
          <div className='s.pfc'>
            <p className={s.info_string}>Proteins: 10.4gr</p>
            <p className={s.info_string}>Fats: 12.8gr</p>
            <p className={s.info_string}>Carbohydrates: 21.2gr</p>
          </div>
          <div className={s.call_weight}>
            <p className={s.info_string}>Calories per 100 gr: 241</p>
            <p className={s.info_string}>Weight: 945gr</p>
          </div>
          <p className={s.price}>32.00$</p>
          <NavLink to='/cart' className={s.nav_link}>
            <div className={s.button}>
              <span>Add to backet</span>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;

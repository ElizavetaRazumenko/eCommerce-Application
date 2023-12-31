import { NavLink } from 'react-router-dom';

import Drink from './components/drink';
import s from './drinks.module.scss';

import state from '../../../../state/state';

const SectionDrinks = () => {
  return (
    <div>
      <section className={s.section_drinks}>
        <h2 className={s.title_right}>Don't forget to choose some drinks</h2>
        <div className={s.drinks_container}>
          {state.mainPage.drinks.map((drinkInf, index) => (
            <Drink link={drinkInf.link} price={drinkInf.price} key={index} />
          ))}
        </div>
        <NavLink to='/catalog' className={s.link}>
          <button className={s.btn_catalog}>To catalog</button>
        </NavLink>
      </section>
    </div>
  );
};

export default SectionDrinks;

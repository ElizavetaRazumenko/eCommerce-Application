import { NavLink } from 'react-router-dom';

import Drink from './components/drink';
import s from './drinks.module.scss';

import state from '../../../../state/state';

const CatalogDrinks = () => {
  return (
    <div>
      <section className={s.section_drinks_catalog}>
        <h2 className={s.title_right}>Don't forget to choose some drinks</h2>
        <div className={s.drinks_container_catalog}>
          {state.mainPage.drinks.map((drinkInf, index) => (
            <Drink link={drinkInf.link} price={drinkInf.price} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatalogDrinks;

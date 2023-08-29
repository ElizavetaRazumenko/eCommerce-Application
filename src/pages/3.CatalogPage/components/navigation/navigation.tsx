import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import s from './navigation.module.scss';

const CatalogNavigation = () => {
  const [currentCathegory, setCurrentCathegory] = useState<string>('All');
  return (
    <div className={s.wrapper}>
      <div className={s.navigation_wrapper}>
        <p className={s.title}>Select category</p>
        <div className={s.cathegory}>
          <span>Current: </span>
          <span className={s.road}>{currentCathegory}</span>
        </div>
        <div className={s.cathegory_selection}>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog'
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
              onClick={() => setCurrentCathegory('All')}
            >
              All:
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.sec_level
                  : s.link + ' ' + s.sec_level
              }
              onClick={() => setCurrentCathegory('All > Food')}
            >
              Food:
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/pizzas'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.thind_level
                  : s.link + ' ' + s.thind_level
              }
              onClick={() => setCurrentCathegory('All > Food > Pizzas')}
            >
              Pizzas
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/sauses'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.thind_level
                  : s.link + ' ' + s.thind_level
              }
              onClick={() => setCurrentCathegory('All > Food > Sauces')}
            >
              Sauces
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/drinks'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.sec_level
                  : s.link + ' ' + s.sec_level
              }
              onClick={() => setCurrentCathegory('All > Drinks')}
            >
              Drinks
            </NavLink>
          </p>
        </div>
      </div>
      <div className={s.navigation_road}>All</div>
    </div>
  );
};

export default CatalogNavigation;

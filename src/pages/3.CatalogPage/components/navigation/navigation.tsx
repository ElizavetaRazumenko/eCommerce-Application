import { NavLink } from 'react-router-dom';

import s from './navigation.module.scss';

import { getCategoryProduct, getProducts } from '../../../../shared';
import { CatalogNavPropsType, ProductsType } from '../../../../types/types';

const CatalogNavigation = (props: CatalogNavPropsType) => {
  return (
    <div className={s.wrapper}>
      <div className={s.navigation_wrapper}>
        <p className={s.title}>Select a category</p>
        <div className={s.cathegory}>
          <span>Current: </span>
          <span className={s.road}>{props.currentCathegory}</span>
        </div>
        <div className={s.cathegory_selection}>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog'
              className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
              onClick={() => {
                props.setCurrentCathegory('All');
                localStorage.setItem('Cathegory', 'All');
              }}
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
              onClick={() => {
                props.setCurrentCathegory('All > Food');
                localStorage.setItem('Cathegory', 'All > Food');
              }}
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
              onClick={async () => {
                const productsData = await getProducts();
                if (productsData) {
                  props.setProducts(productsData);
                }
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Pizzas:
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/pizzas/non-spicy'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={async () => {
                const productsData = await getCategoryProduct('PS-1-P-NSF');
                if (productsData) {
                  props.setProducts(productsData);
                }
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Non-spicy
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/pizzas/vegetarian'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={async () => {
                const productsData = await getCategoryProduct('PS-1-P-VF');
                if (productsData) {
                  props.setProducts(productsData);
                }
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Vegetarian
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/pizzas/low-calorie'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={async () => {
                const productsData = await getCategoryProduct('PS-1-P-LCF');
                if (productsData) {
                  props.setProducts(productsData);
                }
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Low calorie
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
              onClick={() => {
                props.setCurrentCathegory('All > Food > Sauces');
                localStorage.setItem('Cathegory', 'All > Food > Sauces');
              }}
            >
              Sauces:
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/sauses/non-spicy'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={() => {
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Non-spicy
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/sauses/vegetarian'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={() => {
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Vegetarian
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/food/sauses/low-calorie'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.fourd_level
                  : s.link + ' ' + s.fourd_level
              }
              onClick={() => {
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Low calorie
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
              onClick={() => {
                props.setCurrentCathegory('All > Drinks');
                localStorage.setItem('Cathegory', 'All > Drinks');
              }}
            >
              Drinks:
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/drinks/carbonated'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.thind_level
                  : s.link + ' ' + s.thind_level
              }
              onClick={() => {
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Carbonated
            </NavLink>
          </p>
          <p className={s.cathegory_type}>
            <NavLink
              to='/catalog/drinks/non-carbonated'
              className={({ isActive }) =>
                isActive
                  ? s.link + ' ' + s.no_active_link + ' ' + s.thind_level
                  : s.link + ' ' + s.thind_level
              }
              onClick={() => {
                props.setCurrentCathegory('All > Food > Pizzas');
                localStorage.setItem('Cathegory', 'All > Food > Pizzas');
              }}
            >
              Non-carbonated
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CatalogNavigation;

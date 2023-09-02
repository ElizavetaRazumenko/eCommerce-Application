import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import s from './navigation.module.scss';

import { getProducts } from '../../../../shared';
import { CatalogNavPropsType } from '../../../../types/types';

interface Category {
  name: string;
  path: string;
}

const CatalogNavigation = (props: CatalogNavPropsType) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [currentPath, setCurrentPath] = useState<string>('');
  const location = useLocation();
  const [currentCategory, setCurrentCategory] = useState<Category[]>([]);

  useEffect(() => {
    setCurrentPath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const pathElements = location.pathname.split('/').filter((element) => element !== '');
    const categoryHierarchy: Category[] = pathElements.map((element, index) => ({
      name: element,
      path: `/${pathElements.slice(0, index + 1).join('/')}`,
    }));

    setCurrentCategory(categoryHierarchy || [{ name: 'All', path: '/catalog' }]);
  }, [location.pathname]);

  const renderHierarchyLinks = () => {
    return currentCategory.map((category, index) => (
      <span key={index}>
        <NavLink to={category.path} className={`${s.link} ${s.link_hierarchy}`}>
          {category.name}
        </NavLink>
        {index < currentCategory.length - 1 && ' > '}
      </span>
    ));
  };

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.cathegory}>
          <span>Current: </span>
          {renderHierarchyLinks()}
        </div>
        <div
          className={openMenu ? s.navigation_wrapper + ' ' + s.opened : s.navigation_wrapper}
          onClick={() => setOpenMenu(!openMenu)}
        >
          <div className={s.category_selection_wrapper}>
            <p className={s.title}>Select a category</p>
            <div className={openMenu ? s.arrow_down + ' ' + s.arrow_up : s.arrow_down}></div>
          </div>
          <div
            className={openMenu ? s.cathegory_selection + ' ' + s.unhidden : s.cathegory_selection}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <p className={s.cathegory_type}>
              <NavLink
                to='/catalog'
                className={({ isActive }) => (isActive ? s.link + ' ' + s.no_active_link : s.link)}
                onClick={() => {
                  props.setCurrentCathegory('All');
                  // localStorage.setItem('Cathegory', 'All');
                }}
              >
                Catalog:
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
                  // localStorage.setItem('Cathegory', 'All > Food');
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
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  props.setCurrentCathegory('All > Food > Pizzas');
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  props.setCurrentCathegory('All > Food > Pizzas');
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  props.setCurrentCathegory('All > Food > Pizzas');
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  // localStorage.setItem('Cathegory', 'All > Food > Sauces');
                }}
              >
                Sauces:
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
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  // localStorage.setItem('Cathegory', 'All > Drinks');
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
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
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
                  // localStorage.setItem('Cathegory', 'All > Food > Pizzas');
                }}
              >
                Non-carbonated
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CatalogNavigation;

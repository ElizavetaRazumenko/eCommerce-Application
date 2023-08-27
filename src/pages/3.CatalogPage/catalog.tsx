import s from './catalog.module.scss';

import CatalogDrinks from './components/catalog-drinks/drinks';

import CatalogPizzas from './components/catalog-pizzas/pizzas';

import CatalogSauces from './components/catalog-sauces/sauces';

import Inputs from './components/inputs/inputs';

import { ProductsType } from '../../types/types';

const CatalogPage = (props: { products: ProductsType }) => {
  return (
    <main className={s.catalog_wrapper}>
      <Inputs />
      <CatalogPizzas products={props.products} />
      <CatalogSauces products={props.products} />
      <CatalogDrinks />
    </main>
  );
};

export default CatalogPage;

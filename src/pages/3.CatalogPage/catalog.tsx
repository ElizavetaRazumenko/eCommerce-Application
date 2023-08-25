import s from './catalog.module.scss';

import CatalogPizzas from './components/catalog-pizzas/pizzas';

import CatalogSauces from './components/catalog-sauces/sauces';

import Inputs from './components/inputs/inputs';

const CatalogPage = () => {
  return (
    <main className={s.catalog_wrapper}>
      <Inputs />
      <CatalogPizzas />
      <CatalogSauces />

      {/* <CatalogPizzas sortBy={sortBy} findBy={findBy} filterBy={filterBy} /> */}
    </main>
  );
};

export default CatalogPage;

import s from './catalog.module.scss';

import CatalogPizzas from './components/catalog-pizzas/pizzas';
import Inputs from './components/inputs/inputs';

const CatalogPage = () => {
  return (
    <div className={s.catalog_wrapper}>
      <Inputs />
      <CatalogPizzas />
      {/* <CatalogPizzas sortBy={sortBy} findBy={findBy} filterBy={filterBy} /> */}
    </div>
  );
};

export default CatalogPage;

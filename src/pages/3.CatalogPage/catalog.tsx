import CatalogDrinks from './components/catalog-drinks/drinks';

import CatalogPizzas from './components/catalog-pizzas/pizzas';

import CatalogSauces from './components/catalog-sauces/sauces';

import { CatalogPropsType } from '../../types/types';

const CatalogPage = (props: CatalogPropsType) => {
  return (
    <main>
      <CatalogPizzas products={props.products} setProductDetailes={props.setProductDetailes} />
      <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />
      <CatalogDrinks products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default CatalogPage;

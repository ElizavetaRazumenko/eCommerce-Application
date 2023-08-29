import s from './catalog.module.scss';

import CatalogDrinks from './components/catalog-drinks/drinks';

import CatalogPizzas from './components/catalog-pizzas/pizzas';

import CatalogSauces from './components/catalog-sauces/sauces';

import Inputs from './components/inputs/inputs';

import CatalogNavigation from './components/navigation/navigation';

import { SetProductDetailsType, ProductsType } from '../../types/types';

const CatalogPage = (props: {
  products: ProductsType;
  setProducts: React.Dispatch<React.SetStateAction<ProductsType>>;
  setProductDetailes: SetProductDetailsType;
}) => {
  return (
    <main className={s.catalog_wrapper}>
      <Inputs setProducts={props.setProducts} />
      <CatalogNavigation />
      <CatalogPizzas products={props.products} setProductDetailes={props.setProductDetailes} />
      <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />
      <CatalogDrinks products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default CatalogPage;

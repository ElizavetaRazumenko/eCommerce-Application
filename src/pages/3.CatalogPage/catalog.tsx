/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import CatalogDrinks from './components/catalog-drinks/drinks';

import CatalogPizzas from './components/catalog-pizzas/pizzas';

import CatalogSauces from './components/catalog-sauces/sauces';

import { getCategoryID, requestToCommerceForRender } from '../../shared';
import requestsCatalogParams from '../../state/requestObj';
import { CatalogPropsType } from '../../types/types';

const CatalogPage = (props: CatalogPropsType) => {
  const sentRequest = async () => {
    const keys = ['PS-1', 'DR-1'];
    const categoryIds = await Promise.all(keys.map(async (key) => await getCategoryID(key)));
    const params = categoryIds.map((id) => `categories.id:"${id}"`);
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter = params;
      const catalogState = await requestToCommerceForRender(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
      requestsCatalogParams.filter = [];
      localStorage.removeItem('filter_params');
    }
  };
  useEffect(() => {
    sentRequest();
  }, []);
  return (
    <main>
      <CatalogSauces products={props.products} />
      <CatalogPizzas products={props.products} setProducts={props.setProducts} />
      <CatalogDrinks products={props.products} />
    </main>
  );
};

export default CatalogPage;

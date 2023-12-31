/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getCategoryID, requestToCommerceForRender } from '../../../../shared';
import requestsCatalogParams from '../../../../state/requestObj';
import { CatalogFoodType } from '../../../../types/types';
import CatalogPizzas from '../../components/catalog-pizzas/pizzas';
import CatalogSauces from '../../components/catalog-sauces/sauces';

const Food = (props: CatalogFoodType) => {
  const sentRequest = async () => {
    const categoryId = await getCategoryID('PS-1');
    const params = `categories.id:"${categoryId}"`;
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
    </main>
  );
};

export default Food;

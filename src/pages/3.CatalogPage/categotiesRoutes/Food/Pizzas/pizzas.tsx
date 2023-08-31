/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getCategoryID, requestToCommerceForRender } from '../../../../../shared';
import requestsCatalogParams from '../../../../../state/requestObj';
import { CatalogFoodNamedType } from '../../../../../types/types';
import CatalogPizzas from '../../../components/catalog-pizzas/pizzas';

const CatalogNavToPizzas = (props: CatalogFoodNamedType) => {
  const sentRequest = async () => {
    const categoryId = await getCategoryID('PS-1-P');
    const params = `categories.id:"${categoryId}"`;
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter = params;
      const catalogState = await requestToCommerceForRender(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
      requestsCatalogParams.filter = [];
    }
  };
  useEffect(() => {
    sentRequest();
  }, []);
  return (
    <CatalogPizzas
      products={props.products}
      setProducts={props.setProducts}
      setProductDetailes={props.setProductDetailes}
    />
  );
};

export default CatalogNavToPizzas;

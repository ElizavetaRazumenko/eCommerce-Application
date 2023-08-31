/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getCategoryID, requestToCommerceForRender } from '../../../../../shared';
import requestsCatalogParams from '../../../../../state/requestObj';
import { CatalogFoodNamedType } from '../../../../../types/types';
import CatalogPizzas from '../../../components/catalog-pizzas/pizzas';

const CatalogNavToPizzas = (props: CatalogFoodNamedType) => {
  const sentRequest = async () => {
    const keys = ['PS-1-P'];
    const categoryIds = await Promise.all(keys.map(async (key) => await getCategoryID(key)));
    const params = categoryIds.map((id) => `categories.id:"${id}"`);
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter = params;
      const catalogState = await requestToCommerceForRender(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
    }
  };
  useEffect(() => {
    sentRequest();
  }, []);
  return (
    <main>
      <CatalogPizzas
        products={props.products}
        setProducts={props.setProducts}
        setProductDetailes={props.setProductDetailes}
      />
    </main>
  );
};

export default CatalogNavToPizzas;

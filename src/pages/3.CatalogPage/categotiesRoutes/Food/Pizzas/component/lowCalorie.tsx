/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { requestToCommerce } from '../../../../../../shared';
import requestsCatalogParams from '../../../../../../state/requestObj';
import { CatalogFoodNamedType } from '../../../../../../types/types';
import CatalogPizzas from '../../../../components/catalog-pizzas/pizzas';

const CatalogNavLowCalorie = (props: CatalogFoodNamedType) => {
  const sentRequest = async () => {
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter = [`variants.attributes.lc:"yes"`];
      const catalogState = await requestToCommerce(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
      localStorage.setItem('filter_params', JSON.stringify([`variants.attributes.lc:"yes"`]));
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

export default CatalogNavLowCalorie;

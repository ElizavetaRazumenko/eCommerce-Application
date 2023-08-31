/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect } from 'react';

import { requestToCommerce } from '../../../../../../shared';
import requestsCatalogParams from '../../../../../../state/requestObj';
import { CatalogFoodNamedType } from '../../../../../../types/types';
import CatalogSauces from '../../../../components/catalog-sauces/sauces';

const CatalogNavSauceLowCalorie = (props: CatalogFoodNamedType) => {
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
  return <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />;
};

export default CatalogNavSauceLowCalorie;

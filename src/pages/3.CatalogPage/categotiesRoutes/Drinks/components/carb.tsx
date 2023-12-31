/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { requestToCommerce } from '../../../../../shared';
import requestsCatalogParams from '../../../../../state/requestObj';
import { CatalogFoodNamedType } from '../../../../../types/types';
import CatalogDrinks from '../../../components/catalog-drinks/drinks';

const CatalogNavCarbo = (props: CatalogFoodNamedType) => {
  const sentRequest = async () => {
    if (Array.isArray(requestsCatalogParams.filter)) {
      requestsCatalogParams.filter = [`variants.attributes.fc:"no"`];
      const catalogState = await requestToCommerce(requestsCatalogParams);
      if (catalogState) props.setProducts(catalogState);
      localStorage.setItem('filter_params', JSON.stringify([`variants.attributes.fc:"no"`]));
    }
  };
  useEffect(() => {
    sentRequest();
  }, []);
  return <CatalogDrinks products={props.products} />;
};

export default CatalogNavCarbo;

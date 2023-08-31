/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getCategoryID, requestToCommerceForRender } from '../../../../shared';
import requestsCatalogParams from '../../../../state/requestObj';
import { CatalogDrinksType } from '../../../../types/types';
import CatalogDrinks from '../../components/catalog-drinks/drinks';

const Drinks = (props: CatalogDrinksType) => {
  const sentRequest = async () => {
    const categoryId = await getCategoryID('DR-1');
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
  return <CatalogDrinks products={props.products} setProductDetailes={props.setProductDetailes} />;
};

export default Drinks;

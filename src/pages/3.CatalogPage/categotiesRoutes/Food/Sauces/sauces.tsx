/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';

import { getCategoryID, requestToCommerceForRender } from '../../../../../shared';
import requestsCatalogParams from '../../../../../state/requestObj';
import { CatalogFoodType } from '../../../../../types/types';
import CatalogSauces from '../../../components/catalog-sauces/sauces';

const CatalogNavToSauces = (props: CatalogFoodType) => {
  const sentRequest = async () => {
    const categoryId = await getCategoryID('PS-1-S');
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
    </main>
  );
};

export default CatalogNavToSauces;

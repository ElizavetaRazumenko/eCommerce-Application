import { CatalogDrinksType } from '../../../../types/types';
import CatalogDrinks from '../../components/catalog-drinks/drinks';

const Drinks = (props: CatalogDrinksType) => {
  return (
    <main>
      <CatalogDrinks products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default Drinks;

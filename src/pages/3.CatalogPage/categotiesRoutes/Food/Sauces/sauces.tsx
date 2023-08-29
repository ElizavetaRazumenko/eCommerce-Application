import { CatalogFoodType } from '../../../../../types/types';
import CatalogSauces from '../../../components/catalog-sauces/sauces';

const CatalogNavToSauces = (props: CatalogFoodType) => {
  return (
    <main>
      <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default CatalogNavToSauces;

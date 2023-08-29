import { CatalogFoodType } from '../../../../../types/types';
import CatalogPizzas from '../../../components/catalog-pizzas/pizzas';

const CatalogNavToPizzas = (props: CatalogFoodType) => {
  return (
    <main>
      <CatalogPizzas products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default CatalogNavToPizzas;

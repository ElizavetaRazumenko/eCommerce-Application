import { CatalogFoodType } from '../../../../types/types';
import CatalogPizzas from '../../components/catalog-pizzas/pizzas';
import CatalogSauces from '../../components/catalog-sauces/sauces';

const Food = (props: CatalogFoodType) => {
  return (
    <main>
      <CatalogPizzas products={props.products} setProductDetailes={props.setProductDetailes} />
      <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default Food;

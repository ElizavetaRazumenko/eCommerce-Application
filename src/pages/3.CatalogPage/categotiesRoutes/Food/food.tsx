import { CatalogFoodType } from '../../../../types/types';
import CatalogPizzas from '../../components/catalog-pizzas/pizzas';
import CatalogSauces from '../../components/catalog-sauces/sauces';

const Food = (props: CatalogFoodType) => {
  return (
    <main>
      <CatalogPizzas
        products={props.products}
        setProducts={props.setProducts}
        setProductDetailes={props.setProductDetailes}
        page='pizzas'
      />
      <CatalogSauces products={props.products} setProductDetailes={props.setProductDetailes} />
    </main>
  );
};

export default Food;

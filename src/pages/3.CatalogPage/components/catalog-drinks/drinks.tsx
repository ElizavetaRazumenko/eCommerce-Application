import Drink from './components/drink';
import s from './drinks.module.scss';

import { productsKeys } from '../../../../entities/product';
import { ProductsType } from '../../../../types/types';

const CatalogDrinks = (props: { products: ProductsType }) => {
  const drinksItems = props.products.results.filter((el) =>
    productsKeys.drinks.find((item) => item.key === el.key),
  );
  const drinksArray = drinksItems.map((drink) => {
    let drinkCost = (drink.masterVariant.prices[0].value.centAmount / 100).toFixed(2) + '$';
    return (
      <Drink
        key={drink.key}
        link={drink.masterVariant.images[0].url}
        name={drink.name['en-US']}
        price={drinkCost}
        description={drink.description['en-US']}
      />
    );
  });
  return (
    <div>
      <section className={s.section_drinks_catalog}>
        <h2 className={s.title_right}>Drinks</h2>
        <div className={s.drinks_container_catalog}>{drinksArray}</div>
      </section>
    </div>
  );
};

export default CatalogDrinks;

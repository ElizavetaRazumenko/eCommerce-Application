import Pizza from './catalog-pizza/pizza';

import s from './pizzas.module.scss';

import { productsKeys } from '../../../../entities/product';

import { ProductsType } from '../../../../types/types';

const CatalogPizzas = (props: { products: ProductsType }) => {
  const pizzasItems = props.products.results.filter((el) =>
    productsKeys.pizzas.find((item) => item.key === el.key),
  );
  const pizzasArray = pizzasItems.map((pizza) => {
    let pizzasCost = pizza.masterVariant.prices.map(
      (el) => (el.value.centAmount / 100).toFixed(2) + '$',
    );
    const variants = pizza.variants;
    if (variants.length > 0) {
      const variantPrices = variants.map(
        (el) => (el.prices[0].value.centAmount / 100).toFixed(2) + '$',
      );
      pizzasCost = pizzasCost.concat(variantPrices);
    }
    const mainIngredientsStartIndex = pizza.description['en-US'].indexOf('Main ingredients');
    return (
      <Pizza
        key={pizza.key}
        link={pizza.masterVariant.images[0].url}
        name={pizza.name['en-US']}
        cost={pizzasCost}
        mainIngredients={pizza.description['en-US'].slice(mainIngredientsStartIndex)}
      />
    );
  });
  return (
    <>
      <div className={s.smoke_b}></div>
      <section className={s.section_offer}>
        <h3 className={s.title_section + ' ' + s.title_center}> Pizzas</h3>
        <div className={s.pizza_collection_catalog}>{pizzasArray} </div>
      </section>
    </>
  );
};

export default CatalogPizzas;

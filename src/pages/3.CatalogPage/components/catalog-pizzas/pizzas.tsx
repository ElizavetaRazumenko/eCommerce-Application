import Pizza from './catalog-pizza/pizza';

import s from './pizzas.module.scss';

import infoProducts, { productsKeys } from '../../../../entities/product';

import state from '../../../../state/state';
import { ProductsType } from '../../../../types/types';

const CatalogPizzas = (props: { products: ProductsType | null }) => {
  if (props.products) {
    const pizzasItems = props.products.results.filter((el) =>
      productsKeys.pizzas.find((item) => item.key === el.key),
    );
    console.log(JSON.stringify(pizzasItems));
  }
  const visiblePizzas = [];

  for (let i = 0; i < state.mainPage.pizzas.length; i++) {
    const pizzaIndex = i % state.mainPage.pizzas.length;
    visiblePizzas.push({ ...state.mainPage.pizzas[pizzaIndex], index: i });
  }
  const pizzas = visiblePizzas.map((pizza) => (
    <Pizza
      key={infoProducts.pizzas[pizza.index].key}
      link={pizza.link}
      name={pizza.name}
      cost={pizza.cost}
      mainIngredients={infoProducts.pizzas[pizza.index].mainIngredients}
    />
  ));
  return (
    <>
      <div className={s.smoke_b}></div>
      <section className={s.section_offer}>
        <h3 className={s.title_section + ' ' + s.title_center}> Pizzas</h3>
        <div className={s.pizza_collection_catalog}>{pizzas} </div>
      </section>
    </>
  );
};

export default CatalogPizzas;

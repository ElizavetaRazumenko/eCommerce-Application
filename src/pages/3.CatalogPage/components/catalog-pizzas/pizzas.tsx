import Pizza from './catalog-pizza/pizza';

import s from './pizzas.module.scss';

import infoProducts from '../../../../entities/product';

import state from '../../../../state/state';

const CatalogPizzas = () => {
  const visiblePizzas = [];

  for (let i = 0; i < state.mainPage.pizzas.length; i++) {
    const pizzaIndex = i % state.mainPage.pizzas.length;
    visiblePizzas.push({ ...state.mainPage.pizzas[pizzaIndex], index: i });
  }
  const pizzas = visiblePizzas.map((pizza) => (
    <Pizza
      key={pizza.index}
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

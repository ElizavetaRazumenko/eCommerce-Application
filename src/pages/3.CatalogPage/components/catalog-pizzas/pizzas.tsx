import Pizza from './catalog-pizza/pizza';

import s from './pizzas.module.scss';

import infoProducts from '../../../../entities/product';

import { CatalogPizzasProps } from '../../../../types/types';

const CatalogPizzas = (props: CatalogPizzasProps) => {
  const pizzasItems = props.products.filter((el) =>
    infoProducts.pizzas.find((item) => item.key === el.key),
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
    let discountInfo: string[] = [];
    if (pizza.masterVariant.prices[0].discounted) {
      const currentDiscounts =
        (pizza.masterVariant.prices[0].discounted.value.centAmount / 100).toFixed(2) + '$';
      discountInfo.push(currentDiscounts);
      if (variants.length > 0) {
        const variantDiscounts = variants.map(
          (el) => (el.prices[0].discounted!.value.centAmount / 100).toFixed(2) + '$',
        );
        discountInfo = discountInfo.concat(variantDiscounts);
      }
    }
    return (
      <Pizza
        key={pizza.key}
        link={pizza.masterVariant.images}
        name={pizza.name['en-US']}
        cost={pizzasCost}
        description={pizza.description['en-US']}
        setProductDetailes={props.setProductDetailes}
        discounts={discountInfo}
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

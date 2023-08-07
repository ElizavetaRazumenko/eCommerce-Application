import Pizza from './components/pizza/pizza';
import s from './pizzas.module.css';

import pepperoniUrl from '../../../../assets/pizzas/pepperoni.png';
import rusticUrl from '../../../../assets/pizzas/rustic.png';
import salamiUrl from '../../../../assets/pizzas/salami.png';

const SectionPizzas = () => {
  return (
    <>
      <section className='section section-offer'>
        <h3 className='title-section title-center'>We offer a collection of our best pizzas</h3>
        <div className='pizza-collection'>
          <Pizza link={pepperoniUrl} name='Pepperoni' cost={['32.00$', '25.00$', '18.00$']} />
          <Pizza link={salamiUrl} name='Salami' cost={['25.00$', '20.00$', '15.00$']} />
          <Pizza link={rusticUrl} name='Rustic' cost={['20.00$', '15.00$', '10.00$']} />
        </div>
        <button className='btn-seeall'>See all</button>
      </section>
    </>
  );
};

export default SectionPizzas;

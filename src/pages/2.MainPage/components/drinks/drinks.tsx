import Drink from './components/drink';
import s from './drinks.module.css';

import bonaquaUrl from '../../../../assets/drinks/bonaqua.png';
import colaUrl from '../../../../assets/drinks/cola.png';
import fantaUrl from '../../../../assets/drinks/fanta.png';
import juiceryUrl from '../../../../assets/drinks/juicery.png';
import pepsiUrl from '../../../../assets/drinks/pepsi.png';
import spriteUrl from '../../../../assets/drinks/sprite.png';

const arrayDrinksInfo = [
  {
    link: colaUrl,
    price: '1.60$',
  },
  {
    link: fantaUrl,
    price: '1.60$',
  },
  {
    link: spriteUrl,
    price: '1.60$',
  },
  {
    link: pepsiUrl,
    price: '1.60$',
  },
  {
    link: bonaquaUrl,
    price: '0.80$',
  },
  {
    link: juiceryUrl,
    price: '3.50$',
  },
];

const SectionDrinks = () => {
  return (
    <div>
      <section className={s.section_drinks}>
        <h2 className={s.title_right}>Don't forget to choose some drinks</h2>
        <div className={s.drinks_container}>
          {arrayDrinksInfo.map((drinkInf, index) => (
            <Drink link={drinkInf.link} price={drinkInf.price} />
          ))}
        </div>
        <button className={s.btn_catalog}>To catalog</button>
      </section>
    </div>
  );
};

export default SectionDrinks;

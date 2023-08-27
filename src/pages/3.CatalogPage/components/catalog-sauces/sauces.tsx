import Sauce from './components/sauce';

import s from './sauces.module.scss';

import state from '../../../../state/state';

const CatalogSauces = () => {
  return (
    <div>
      <section className={s.section_sauce_catalog}>
        <h2 className={s.title_section}>Sauces</h2>
        <div className={s.select_sauce_catalog}>
          {state.mainPage.souces.map((sauce, index) => (
            <Sauce
              link={sauce.link}
              name={sauce.name}
              key={index}
              price={'0.60$'}
              description={'Blablablablablabl bla bla bla'}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatalogSauces;

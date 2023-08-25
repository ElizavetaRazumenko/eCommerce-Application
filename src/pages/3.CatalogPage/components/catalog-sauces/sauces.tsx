import Sauce from './components/sauce';

import s from './sauces.module.scss';

import state from '../../../../state/state';

const CatalogSauces = () => {
  return (
    <div>
      <section className={s.section_souce_catalog}>
        <h2 className={s.title_section}>Sauces</h2>
        <div className={s.select_souce}>
          {state.mainPage.souces.map((souce, index) => (
            <Sauce link={souce.link} name={souce.name} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CatalogSauces;

import Sauce from './components/souce';

import s from './sauces.module.scss';

import state from '../../../../state/state';

const SectionSauces = () => {
  return (
    <div>
      <section className={s.section_souce}>
        <h2 className={s.title_section}>Take the sauce to feel all the splendor of taste</h2>
        <div className={s.select_souce}>
          {state.mainPage.souces.map((souce, index) => (
            <Sauce link={souce.link} name={souce.name} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionSauces;

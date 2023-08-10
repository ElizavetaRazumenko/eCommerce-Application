import Sauce from './components/souce';

import s from './sauces.module.scss';

import { stateTypeSouces } from '../../../../types/types';

const SectionSauces = (props: stateTypeSouces) => {
  return (
    <div>
      <section className={s.section_souce}>
        <h2 className={s.title_section}>Take the sauce to feel all the splendor of taste</h2>
        <div className={s.select_souce}>
          {props.saucesType.map((souce, index) => (
            <Sauce link={souce.link} name={souce.name} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionSauces;

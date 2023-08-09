import Sauce from './components/souce';

import s from './sauces.module.scss';

import barbecueUrl from '../../../../assets/sauces/barbecue.png';
import carryUrl from '../../../../assets/sauces/carry.png';
import garlicUrl from '../../../../assets/sauces/garlic.png';
import ketchupUrl from '../../../../assets/sauces/ketchup.png';
import onionUrl from '../../../../assets/sauces/onion.png';
import sourcreamUrl from '../../../../assets/sauces/sourcream.png';
import sweetUrl from '../../../../assets/sauces/sweet.png';
import tomatoUrl from '../../../../assets/sauces/tomato.png';

const arraySauceInfo = [
  {
    link: carryUrl,
    name: 'Carry',
  },
  {
    link: ketchupUrl,
    name: 'Ketchup',
  },
  {
    link: sweetUrl,
    name: 'Sweet',
  },
  {
    link: garlicUrl,
    name: 'Garlic',
  },
  {
    link: tomatoUrl,
    name: 'Tomato',
  },
  {
    link: onionUrl,
    name: 'Onion',
  },
  {
    link: sourcreamUrl,
    name: 'Sour cream',
  },
  {
    link: barbecueUrl,
    name: 'Barbecue',
  },
];

const SectionSauces = () => {
  return (
    <div>
      <section className={s.section_souce}>
        <h2 className={s.title_section}>Take the sauce to feel all the splendor of taste</h2>
        <div className={s.select_souce}>
          {arraySauceInfo.map((souce, index) => (
            <Sauce link={souce.link} name={souce.name} key={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default SectionSauces;

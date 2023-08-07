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

const SectionSauces = () => {
  return (
    <div>
      <section className={s.section_souce}>
        <h2 className={s.title_section}>Take the sauce to feel all the splendor of taste</h2>
        <div className={s.select_souce}>
          <Sauce link={carryUrl} name='Carry' />
          <Sauce link={ketchupUrl} name='Ketchup' />
          <Sauce link={sweetUrl} name='Sweet' />
          <Sauce link={garlicUrl} name='Garlic' />
          <Sauce link={tomatoUrl} name='Tomato' />
          <Sauce link={onionUrl} name='Onion' />
          <Sauce link={sourcreamUrl} name='Sour cream' />
          <Sauce link={barbecueUrl} name='Barbecue' />
        </div>
      </section>
    </div>
  );
};

export default SectionSauces;

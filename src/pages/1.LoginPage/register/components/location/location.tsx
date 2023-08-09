import s from './location.module.scss';

import imageurl from '../../../../../assets/png/downArrow.png';

const Location = () => {
  return (
    <div
      className={s.location_selector}
      onClick={(event) => {
        const trgt = event.target as HTMLElement;
        trgt.classList.toggle(s.active);
      }}
    >
      <p className={s.content}>Select address</p>
      <img src={imageurl} alt='arrow' className={s.arrow} />
    </div>
  );
};

export default Location;

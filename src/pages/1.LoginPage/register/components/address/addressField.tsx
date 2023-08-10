import s from './addressField.module.scss';

import imageUrl from '../../../../../assets/png/downArrow.png';

const AddressField = () => {
  return (
    <div className={s.address_wrapper}>
      <div className={s.country_wrapper}>
        <div className={s.country}>
          <p className={s.content}>Select country</p>
          <img src={imageUrl} alt='arrow' className={s.arrow} />
        </div>
      </div>
      <div className={s.address + ' ' + s.unactive}></div>
    </div>
  );
};

export default AddressField;
